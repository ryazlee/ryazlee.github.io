export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	id: string;
	name: string;
	description: string;
	language?: string;
	/** Primary destination (title click) */
	href: string;
	/** Optional icon URL. Defaults to the site favicon for `href`. */
	icon?: string;
	/** Extra destinations shown under the title (website, App Store, GitHub, …) */
	links?: ProjectLink[];
};

/** Favicon for a project — explicit override, else Google’s favicon service. */
export const projectIconUrl = (project: Project, size = 64): string => {
	if (project.icon) return project.icon;
	try {
		const host = new URL(project.href).hostname;
		return `https://www.google.com/s2/favicons?domain=${host}&sz=${size}`;
	} catch {
		return `https://www.google.com/s2/favicons?domain=github.com&sz=${size}`;
	}
};

/**
 * Project list for the site. Edit this file to add/reorder/update projects.
 * Order here is display order.
 */
export const projects: Project[] = [
	{
		id: "slumber",
		name: "slumber",
		description: "Social sleep tracking for you and your friends.",
		href: "https://useslumber.com/home",
		links: [
			{ label: "Website", href: "https://useslumber.com/home" },
			{ label: "App Store", href: "https://apps.apple.com/app/id6772449516" },
			{ label: "GitHub", href: "https://github.com/ryazlee/slumber-web" },
		],
	},
	{
		id: "lombard-party",
		name: "lombard-party",
		description: "Homesite for the Lombard household.",
		href: "https://ryazlee.github.io/lombard-party/",
		links: [
			{ label: "Website", href: "https://ryazlee.github.io/lombard-party/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/lombard-party" },
		],
	},
	{
		id: "whos-with-who",
		name: "whos-with-who",
		description: "A smol game to guess partnerships in a friend group.",
		href: "https://github.com/ryazlee/whos-with-who",
		links: [
			{ label: "GitHub", href: "https://github.com/ryazlee/whos-with-who" },
		],
	},
	{
		id: "payment-splitter",
		name: "payment-splitter",
		description: "A simple webapp to help you split the bill.",
		href: "https://ryazlee.github.io/payment-splitter/",
		links: [
			{ label: "Website", href: "https://ryazlee.github.io/payment-splitter/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/payment-splitter" },
		],
	},
	{
		id: "poker-session-manager",
		name: "poker-session-manager",
		description: "Manage your poker sessions.",
		href: "https://ryazlee.github.io/poker-session-manager/",
		links: [
			{ label: "Website", href: "https://ryazlee.github.io/poker-session-manager/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/poker-session-manager" },
		],
	},
	{
		id: "ride-mates",
		name: "ride-mates",
		description: "Find fellow ride mates for your next trip.",
		href: "https://www.ridemates.org/",
		links: [
			{ label: "Website", href: "https://www.ridemates.org/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/ride-mates" },
		],
	},
	{
		id: "yearify",
		name: "yearify",
		description: "Turn the year into something you can look back on.",
		href: "https://yearify.org/",
		links: [
			{ label: "Website", href: "https://yearify.org/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/yearify" },
		],
	},
	{
		id: "contacts-heatmap",
		name: "contacts-heatmap",
		description: "Heatmap of where your Google contacts are from.",
		href: "https://ryazlee.github.io/contacts-heatmap/",
		links: [
			{ label: "Website", href: "https://ryazlee.github.io/contacts-heatmap/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/contacts-heatmap" },
		],
	},
	{
		id: "ff-player-tracker",
		name: "ff-player-tracker",
		description: "Fantasy football news for the players you care about.",
		href: "https://ryazlee.github.io/ff-player-tracker/",
		links: [
			{ label: "Website", href: "https://ryazlee.github.io/ff-player-tracker/" },
			{ label: "GitHub", href: "https://github.com/ryazlee/ff-player-tracker" },
		],
	},
];
