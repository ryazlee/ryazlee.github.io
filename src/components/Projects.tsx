import React from "react";

type ProjectData = {
	title: string;
	imageSrc?: string;
	link?: string;
	description: string;
	githubLink: string;
	dateAdded?: string;
};

const projects: ProjectData[] = [
	{
		title: "SpOnGeBoB MeMeR",
		link: "https://chromewebstore.google.com/detail/hoiklbooldephjininjimnolbkklmflc",
		description:
			"Small chrome extension that allows you to use the SpOnGeBoB MeMe with your friends!",
		githubLink: "https://github.com/ryazlee/spongebob_memer",
		dateAdded: "11-19-19",
	},
	{
		title: "yearify",
		description:
			"Simple webapp that connects to you google calendar and shows you how you spent your year!",
		githubLink: "https://github.com/ryazlee/yearify",
		link: "https://yearify.org/",
		dateAdded: "12-28-24",
	},
	{
		title: "Ride Mates",
		description:
			"An app that connects people who want to carpool to similar locations.",
		githubLink: "https://github.com/ryazlee/ride-mates",
		link: "https://www.ridemates.org/",
		dateAdded: "01-15-25",
	},
	{
		title: "Contacts Heatmap",
		description:
			"Visualizes your Google Contacts on a heatmap based on their phone area code.",
		githubLink: "https://github.com/ryazlee/contacts-heatmap",
		link: "https://ryazlee.github.io/contacts-heatmap/",
		dateAdded: "12-01-25",
	},
];

export const Projects: React.FC = () => {
	return (
		<div className="max-w-4xl w-full px-6">
			<h1 className="text-4xl mb-8 text-center">Personal Projects</h1>
			{projects.map((project) => (
				<div
					key={project.title}
					className="bg-white rounded-lg p-6 mb-6 shadow hover:shadow-lg transition-shadow"
				>
					<h2 className="text-2xl mb-3">
						{project.link ? (
							<a
								className="link"
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.title}
							</a>
						) : (
							project.title
						)}
					</h2>
					{project.imageSrc && (
						<img
							src={project.imageSrc}
							alt={project.title}
							className="max-w-[200px] rounded my-3"
						/>
					)}
					<p className="text-gray-600 mb-3">{project.description}</p>
					<div className="flex items-center gap-2 text-sm">
						<a
							className="link"
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						{project.dateAdded && (
							<span className="text-gray-500">
								• {project.dateAdded}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
