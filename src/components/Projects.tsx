import React, { useState } from "react";
import { Project, projectIconUrl, projects } from "data/projects";
import { Link } from "components/Link";

const ProjectIcon: React.FC<{ project: Project }> = ({ project }) => {
	const [failed, setFailed] = useState(false);
	if (failed) {
		return (
			<span
				aria-hidden
				className="w-6 h-6 rounded-md bg-fg/10 shrink-0 inline-block align-middle"
			/>
		);
	}
	return (
		<img
			src={projectIconUrl(project)}
			alt=""
			width={24}
			height={24}
			loading="lazy"
			decoding="async"
			onError={() => setFailed(true)}
			className="w-6 h-6 rounded-md object-contain shrink-0 inline-block align-middle bg-fg/5"
		/>
	);
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	const links = project.links ?? [];

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
			{links.length > 0 && (
				<div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mt-auto pt-3 text-[11px] text-faint">
					{links.map((link) => (
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

export const Projects: React.FC = () => {
	return (
		<div className="animate-fade-up">
			<h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-faint mb-4">
				Projects
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};
