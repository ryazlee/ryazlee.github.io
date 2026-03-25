import React from "react";
import peekingBitmoji from "assets/peeking_bitmoji.png";

const Frame: React.FC = () => (
	<div className="fixed bottom-0">
		<img src={peekingBitmoji} alt="Peeking Bitmoji" className="w-[90px]" />
	</div>
);

export default Frame;
