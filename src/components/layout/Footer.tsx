import React, { Component } from "react";
import { connectLinks } from "../../config";
import "../../styles.scss";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<a className="link" href={connectLinks.resume}>
					Resume.pdf
				</a>
			</div>
		);
	}
}

export default Footer;
