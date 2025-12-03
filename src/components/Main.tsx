import React from "react";
import ColoredLine from "./layout/ColoredLine";
import { connectLinks } from "../config";

export const Main: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 text-base md:text-3xl leading-relaxed text-justify">
			<ColoredLine />
			Hello 👋! I'm Ryan, a San Francisco based software engineer at{" "}
			<a className="link" href="https://aurora.tech/">
				Aurora
			</a>
			. I specialize in frontend and mobile development, where I primarily
			build and maintain an extensible visualization web app.
			<br />
			<br />
			In my free time, I enjoy staying active and giving back to my
			community! If you want to get connected, feel free to shoot me a
			message on{" "}
			<a className="link" href={connectLinks.linkedIn}>
				LinkedIn
			</a>{" "}
			or send me an{" "}
			<a className="link" href={connectLinks.email}>
				email
			</a>
			.
			<br />
			<br />
			Cheers! 🍻
		</div>
	);
};
