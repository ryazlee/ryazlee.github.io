import React from "react";
import peekingBitmoji from "assets/peeking_bitmoji.png";

const Frame: React.FC = () => (
	<div className="fixed bottom-0 left-0 pointer-events-none select-none opacity-80 hidden sm:block animate-fade-in delay-4">
		<img
			src={peekingBitmoji}
			alt=""
			aria-hidden
			className="w-[72px] md:w-[84px]"
		/>
	</div>
);

export default Frame;
