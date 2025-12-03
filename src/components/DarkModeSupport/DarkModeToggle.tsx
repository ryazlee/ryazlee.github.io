import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle: React.FC = () => {
	const darkMode = useDarkMode(false);

	function getButton() {
		if (darkMode.value) {
			return (
				<button
					type="button"
					onClick={darkMode.disable}
					className="text-xl bg-transparent border-none cursor-pointer focus:outline-none"
				>
					🌞
				</button>
			);
		} else {
			return (
				<button
					type="button"
					onClick={darkMode.enable}
					className="text-xl bg-transparent border-none cursor-pointer focus:outline-none"
				>
					🌚
				</button>
			);
		}
	}

	return <div>{getButton()}</div>;
};

export default DarkModeToggle;
