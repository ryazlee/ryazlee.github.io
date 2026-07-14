export type ProjectLink = {
	label: string;
	href: string;
};

/** Local config only — live name/description/links come from GitHub. */
export type ProjectConfig = {
	id: string;
	/** `owner/repo` for the GitHub API */
	repo: string;
	/** Optional display name (defaults to repo name) */
	name?: string;
	/** Override GitHub homepage when it's missing or wrong */
	homepage?: string;
	/** Extra links (App Store, etc.) shown alongside Website / GitHub */
	extraLinks?: ProjectLink[];
	/** Optional icon URL. Defaults to the site favicon for the primary URL. */
	icon?: string;
};

export type Project = {
	id: string;
	name: string;
	description: string;
	href: string;
	icon?: string;
	links: ProjectLink[];
};

/**
 * Project list for the site. Edit this file to add/reorder/update projects.
 * Order here is display order. Descriptions and default links are fetched from GitHub.
 */
export const projectConfigs: ProjectConfig[] = [
	{
		id: "slumber",
		repo: "ryazlee/slumber-web",
		name: "slumber",
		extraLinks: [
			{ label: "App Store", href: "https://apps.apple.com/app/id6772449516" },
		],
	},
	{
		id: "callout",
		repo: "ryazlee/callout",
		homepage: "https://ryazlee.github.io/callout/",
	},
	{
		id: "lombard-party",
		repo: "ryazlee/lombard-party",
	},
	{
		id: "whos-with-who",
		repo: "ryazlee/whos-with-who",
	},
	{
		id: "payment-splitter",
		repo: "ryazlee/payment-splitter",
		homepage: "https://ryazlee.github.io/payment-splitter/",
	},
	{
		id: "poker-session-manager",
		repo: "ryazlee/poker-session-manager",
	},
	{
		id: "ride-mates",
		repo: "ryazlee/ride-mates",
		homepage: "https://www.ridemates.org/",
	},
	{
		id: "yearify",
		repo: "ryazlee/yearify",
		homepage: "https://yearify.org/",
	},
	{
		id: "contacts-heatmap",
		repo: "ryazlee/contacts-heatmap",
	},
	{
		id: "ff-player-tracker",
		repo: "ryazlee/ff-player-tracker",
	},
];

export const projectIconUrl = (project: Pick<Project, "href" | "icon">, size = 64): string => {
	if (project.icon) return project.icon;
	try {
		const host = new URL(project.href).hostname;
		return `https://www.google.com/s2/favicons?domain=${host}&sz=${size}`;
	} catch {
		return `https://www.google.com/s2/favicons?domain=github.com&sz=${size}`;
	}
};

type GitHubRepo = {
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
};

export const fetchGitHubRepo = (repo: string): Promise<GitHubRepo> =>
	fetch(`https://api.github.com/repos/${repo}`, {
		headers: { Accept: "application/vnd.github+json" },
	}).then((r) => {
		if (!r.ok) throw new Error(`GitHub API error for ${repo}`);
		return r.json();
	});

/** Merge local config with a GitHub repo payload into a display Project. */
export const mergeProject = (config: ProjectConfig, repo: GitHubRepo): Project => {
	const site =
		config.homepage?.trim() ||
		repo.homepage?.trim() ||
		null;
	const github = repo.html_url;
	const href = site || github;

	const links: ProjectLink[] = [];
	if (site) links.push({ label: "Website", href: site });
	if (config.extraLinks) links.push(...config.extraLinks);
	links.push({ label: "GitHub", href: github });

	return {
		id: config.id,
		name: config.name ?? repo.name,
		description: repo.description?.trim() || "No description yet.",
		href,
		icon: config.icon,
		links,
	};
};
