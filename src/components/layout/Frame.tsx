import React, { Component } from "react";
import peeking_bitmoji from "../../assets/peeking_bitmoji.png";

class Frame extends Component {
	render() {
		return (
			<div className="fixed bottom-0">
				<img
					src={peeking_bitmoji}
					alt="Peeking Bitmoji"
					className="w-[90px]"
				></img>
			</div>
		);
	}
}

export default Frame;
