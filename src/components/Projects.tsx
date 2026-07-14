import React, { useEffect, useMemo, useState } from "react";
import { Project, projectConfigs, projectIconCandidates } from "data/projects";
import { useProjects } from "hooks/useProjects";
import { Link } from "components/Link";

const ProjectIcon: React.FC<{ project: Project }> = ({ project }) => {
	const candidates = useMemo(
		() => projectIconCandidates(project),
		[project.href, project.icon]
	);
	const [index, setIndex] = useState(0);

	// Reset if the project's primary URL / icon override changes.
	useEffect(() => {
		setIndex(0);
	}, [project.href, project.icon]);

	if (index >= candidates.length) {
		return (
			<span
				aria-hidden
				className="w-6 h-6 rounded-md bg-fg/10 shrink-0 inline-block align-middle"
			/>
		);
	}

	return (
		<img
			key={candidates[index]}
			src={candidates[index]}
			alt=""
			width={24}
			height={24}
			loading="lazy"
			decoding="async"
			onError={() => setIndex((i) => i + 1)}
			className="w-6 h-6 rounded-md object-contain shrink-0 inline-block align-middle bg-fg/5"
		/>
	);
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	return (
		<article
			className="flex flex-col w-full h-full rounded-xl border border-line p-5 transition-colors duration-200 hover:border-fg/20"
			style={{ background: "var(--surface)" }}
		>
			<div className="flex items-center gap-2">
				<ProjectIcon project={project} />
				<Link
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[0.95rem] tracking-[-0.01em]"
				>
					{project.name}
				</Link>
			</div>
			<p className="mt-2 text-[0.8rem] text-muted leading-snug">
				{project.description}
			</p>
			{project.links.length > 0 && (
				<div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mt-auto pt-3 text-[11px] text-faint">
					{project.links.map((link) => (
						<a
							key={`${link.label}-${link.href}`}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-faint hover:text-primary no-underline transition-colors duration-200"
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</article>
	);
};

const ProjectSkeleton: React.FC = () => (
	<article
		className="flex flex-col w-full h-full rounded-xl border border-line p-5"
		style={{ background: "var(--surface)" }}
	>
		<div className="flex items-center gap-2">
			<span className="w-6 h-6 rounded-md bg-fg/10 animate-pulse" />
			<span className="h-3 w-28 rounded-sm bg-fg/10 animate-pulse" />
		</div>
		<span className="mt-3 h-3 w-full rounded-sm bg-fg/10 animate-pulse" />
		<span className="mt-2 h-3 w-2/3 rounded-sm bg-fg/10 animate-pulse" />
	</article>
);

export const Projects: React.FC = () => {
	const { projects, isLoading } = useProjects();

	return (
		<div className="animate-fade-up">
			<h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-faint mb-4">
				Projects
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
				{isLoading
					? projectConfigs.map((config) => (
						<ProjectSkeleton key={config.id} />
					))
					: projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
			</div>
		</div>
	);
};
