import { useQueries } from "@tanstack/react-query";

export type GitHubRepo = {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	topics: string[];
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	pushed_at: string;
};

export const PROJECTS = [
	"ryazlee/lombard-party",
	"ryazlee/poker-session-manager",
	"ryazlee/yearify",
	"ryazlee/ride-mates",
	"ryazlee/contacts-heatmap",
	"ryazlee/ff-player-tracker",
];

export const LINK_OVERRIDES: Record<string, string> = {
	yearify: "https://yearify.org/",
	"ride-mates": "https://www.ridemates.org/",
};

const fetchRepo = (repo: string): Promise<GitHubRepo> =>
	fetch(`https://api.github.com/repos/${repo}`, {
		headers: { Accept: "application/vnd.github+json" },
	}).then((r) => {
		if (!r.ok) throw new Error(`GitHub API error for ${repo}`);
		return r.json();
	});

export const useProjectQueries = () => {
	const results = useQueries({
		queries: PROJECTS.map((repo) => ({
			queryKey: ["repo", repo],
			queryFn: () => fetchRepo(repo),
			staleTime: 1000 * 60 * 10,
			retry: false,
		})),
	});
	return {
		results,
		isLoading: results.some((r) => r.isLoading),
		allFailed: results.every((r) => r.isError),
	};
};
