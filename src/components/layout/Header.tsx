import React, { Component } from "react";
import DarkModeToggle from "../DarkModeSupport/DarkModeToggle";
import { connectLinks } from "../../config";
import "../../styles.scss";

class Header extends Component {
	render() {
		return (
			<ul className="header">
				<li>
					<a className="link" href={connectLinks.resume}>
						Resume
					</a>
				</li>
				<li>
					<a className="link" href={connectLinks.linkedIn}>
						LinkedIn
					</a>
				</li>
				<li>
					<a className="link" href={connectLinks.github}>
						Github
					</a>
				</li>
				<li>
					<a className="link" href={connectLinks.email}>
						Email
					</a>
				</li>
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		);
	}
}

export default Header;
