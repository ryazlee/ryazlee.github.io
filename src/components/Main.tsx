import React from "react";
import { connectLinks } from "config";
import { Link } from "components/Link";

const body = "text-[0.95rem] md:text-base leading-relaxed text-muted";

export const Main: React.FC = () => {
	return (
		<div className="space-y-6">
			<p className="text-[1.65rem] md:text-[2rem] font-semibold leading-[1.25] tracking-[-0.025em] animate-fade-up">
				Hello! I'm Ryan, a San Francisco based senior software engineer at{" "}
				<Link href="https://aurora.tech/">Aurora</Link>.
			</p>
			<p className={`${body} animate-fade-up delay-1`}>
				I specialize in frontend and mobile development, where I primarily
				build and maintain an extensible visualization web app.
			</p>
			<p className={`${body} animate-fade-up delay-2`}>
				In my free time, I enjoy staying active and giving back to my
				community! Learn more about me by checking out my{" "}
				<Link href={connectLinks.resume}>resume</Link> or reaching out via{" "}
				<Link href={connectLinks.linkedIn}>LinkedIn</Link> or{" "}
				<Link href={connectLinks.email}>email</Link>.
			</p>
			<p className={`${body} animate-fade-up delay-3`}>Cheers! 🍻</p>
		</div>
	);
};
