import { useQueries } from "@tanstack/react-query";
import {
	fetchGitHubRepo,
	mergeProject,
	projectConfigs,
	Project,
} from "data/projects";

export const useProjects = () => {
	const results = useQueries({
		queries: projectConfigs.map((config) => ({
			queryKey: ["repo", config.repo],
			queryFn: () => fetchGitHubRepo(config.repo),
			staleTime: 1000 * 60 * 10,
			retry: 1,
		})),
	});

	const projects: Project[] = results.flatMap((result, i) => {
		if (!result.data) return [];
		return [mergeProject(projectConfigs[i], result.data)];
	});

	return {
		projects,
		isLoading: results.some((r) => r.isPending),
		allFailed: results.length > 0 && results.every((r) => r.isError),
	};
};
