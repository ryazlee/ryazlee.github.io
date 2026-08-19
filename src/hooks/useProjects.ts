import { useQueries } from '@tanstack/react-query'
import {
  fetchGitHubRepo,
  GitHubRateLimitError,
  mergeProject,
  projectConfigs,
  type Project,
} from '@/data/projects'

export function useProjects() {
  const results = useQueries({
    queries: projectConfigs.map((config) => ({
      queryKey: ['repo', config.repo],
      queryFn: () => fetchGitHubRepo(config.repo),
      staleTime: 1000 * 60 * 10,
      retry: (failureCount: number, error: unknown) =>
        error instanceof GitHubRateLimitError ? false : failureCount < 1,
    })),
  })

  const projects: Project[] = results.flatMap((result, i) => {
    if (!result.data) return []
    return [mergeProject(projectConfigs[i], result.data)]
  })

  return {
    projects,
    isLoading: results.some((r) => r.isPending),
    isRateLimited: results.some(
      (r) => r.error instanceof GitHubRateLimitError,
    ),
    allFailed: results.length > 0 && results.every((r) => r.isError),
  }
}
