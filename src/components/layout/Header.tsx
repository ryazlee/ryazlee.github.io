import React, { Component } from "react";
import DarkModeToggle from "../DarkModeSupport/DarkModeToggle";
import { connectLinks } from "../../config";

class Header extends Component {
	render() {
		return (
			<ul className="absolute right-0 top-2.5">
				<li className="inline-block mx-1.5 md:mx-3">
					<a
						className="link text-xs md:text-base"
						href={connectLinks.resume}
					>
						Resume
					</a>
				</li>
				<li className="inline-block mx-1.5 md:mx-3">
					<a
						className="link text-xs md:text-base"
						href={connectLinks.linkedIn}
					>
						LinkedIn
					</a>
				</li>
				<li className="inline-block mx-1.5 md:mx-3">
					<a
						className="link text-xs md:text-base"
						href={connectLinks.github}
					>
						Github
					</a>
				</li>
				<li className="inline-block mx-1.5 md:mx-3">
					<a
						className="link text-xs md:text-base"
						href={connectLinks.email}
					>
						Email
					</a>
				</li>
				<li className="inline-block mx-1.5 md:mx-3">
					<DarkModeToggle />
				</li>
			</ul>
		);
	}
}

export default Header;
