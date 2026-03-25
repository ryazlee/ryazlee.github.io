import React from "react";
import { connectLinks } from "config";

export const Main: React.FC = () => {
	return (
		<div className="space-y-5">
			<p className="text-2xl md:text-3xl font-semibold leading-snug">
				Hello 👋! I'm Ryan, a San Francisco based software engineer at{" "}
				<a className="link" href="https://aurora.tech/">Aurora</a>.
			</p>
			<p className="text-base md:text-lg leading-relaxed opacity-80">
				I specialize in frontend and mobile development, where I primarily
				build and maintain an extensible visualization web app.
			</p>
			<p className="text-base md:text-lg leading-relaxed opacity-80">
				In my free time, I enjoy staying active and giving back to my
				community! Feel free to reach me on{" "}
				<a className="link" href={connectLinks.linkedIn}>LinkedIn</a>{" "}
				or by <a className="link" href={connectLinks.email}>email</a>.
			</p>
			<p className="text-base md:text-lg opacity-80">Cheers! 🍻</p>
		</div>
	);
};
