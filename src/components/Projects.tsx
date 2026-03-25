import React from "react";
import { GitHubRepo, LINK_OVERRIDES, PROJECTS, useProjectQueries } from "hooks/useProjectQueries";

const LANG_COLORS: Record<string, string> = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	Python: "#3572A5",
	Java: "#b07219",
	Kotlin: "#A97BFF",
	Swift: "#F05138",
	Go: "#00ADD8",
	Rust: "#dea584",
	"C++": "#f34b7d",
	C: "#555555",
	CSS: "#563d7c",
	HTML: "#e34c26",
	Ruby: "#701516",
	Shell: "#89e051",
	Dart: "#00B4AB",
};

function formatRelativeTime(iso: string): string {
	const diff = Date.now() - new Date(iso).getTime();
	const mins = Math.floor(diff / 60000);
	if (mins < 60) return `${mins}m ago`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs}h ago`;
	const days = Math.floor(hrs / 24);
	if (days < 30) return `${days}d ago`;
	const months = Math.floor(days / 30);
	if (months < 12) return `${months}mo ago`;
	return `${Math.floor(months / 12)}y ago`;
}

const ProjectRow: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
	const href = LINK_OVERRIDES[repo.name] ?? repo.homepage ?? repo.html_url;

	return (
		<div className="py-3 border-t border-black/10 dark:border-white/10">
			<div className="flex items-baseline justify-between gap-3">
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="link font-medium text-sm"
				>
					{repo.name}
				</a>
				<div className="flex items-center gap-2 shrink-0">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="opacity-25 hover:opacity-70 transition-opacity"
						title="Open project"
					>
						<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="opacity-25 hover:opacity-70 transition-opacity"
						title="GitHub"
					>
						<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
				</div>
			</div>
			{repo.description && (
				<p className="mt-0.5 text-xs opacity-50 leading-snug">{repo.description}</p>
			)}
			<div className="flex items-center gap-2.5 mt-1 text-[11px] opacity-40">
				{repo.language && (
					<span className="flex items-center gap-1">
						<span
							className="w-2 h-2 rounded-full inline-block shrink-0"
							style={{ backgroundColor: LANG_COLORS[repo.language] ?? "#888" }}
						/>
						{repo.language}
					</span>
				)}
				{repo.stargazers_count > 0 && (
					<span>★ {repo.stargazers_count}</span>
				)}
				{repo.forks_count > 0 && (
					<span>⑂ {repo.forks_count}</span>
				)}
				<span>updated {formatRelativeTime(repo.pushed_at)}</span>
			</div>
			{repo.topics.length > 0 && (
				<div className="flex flex-wrap gap-1 mt-1.5">
					{repo.topics.map((topic) => (
						<span
							key={topic}
							className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/15 dark:border-white/15 opacity-60"
						>
							{topic}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export const Projects: React.FC = () => {
	const { results, isLoading } = useProjectQueries();

	return (
		<div>
			<h2 className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-1">
				Projects
			</h2>
			{isLoading
				? Array.from({ length: PROJECTS.length }).map((_, i) => (
					<div key={i} className="py-3 border-t border-black/10 dark:border-white/10">
						<div className="w-32 h-3 bg-current opacity-10 rounded animate-pulse" />
					</div>
				))
				: results.map((r) =>
					r.data ? <ProjectRow key={r.data.id} repo={r.data} /> : null
				)}
		</div>
	);
};

