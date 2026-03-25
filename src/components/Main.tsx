import React from "react";
import { connectLinks } from "config";
import { Link } from "components/Link";

export const Main: React.FC = () => {
	return (
		<div className="space-y-5">
			<p className="text-2xl md:text-3xl font-semibold leading-snug">
				Hello 👋! I'm Ryan, a San Francisco based software engineer at{" "}
				<Link href="https://aurora.tech/">Aurora</Link>.
			</p>
			<p className="text-base md:text-lg leading-relaxed opacity-80">
				I specialize in frontend and mobile development, where I primarily
				build and maintain an extensible visualization web app.
			</p>
			<p className="text-base md:text-lg leading-relaxed opacity-80">
				In my free time, I enjoy staying active and giving back to my
				community! Learn more about me by checking out my <Link href={connectLinks.resume}>resume</Link> or reaching out via{" "}
				<Link href={connectLinks.linkedIn}>LinkedIn</Link>{" "}
				or <Link href={connectLinks.email}>email</Link>.
			</p>
			<p className="text-base md:text-lg opacity-80">Cheers! 🍻</p>
		</div>
	);
};
