import React, { Component } from "react";
import { connectLinks } from "../../config";

class Footer extends Component {
	render() {
		return (
			<div className="relative mt-12 text-right text-xs md:text-base">
				<a className="link" href={connectLinks.resume}>
					Resume.pdf
				</a>
			</div>
		);
	}
}

export default Footer;
