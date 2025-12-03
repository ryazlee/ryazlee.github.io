import useDarkMode from "use-dark-mode";

const DarkModeStatus: () => string = () => {
	const { value } = useDarkMode(false);

	return value ? "Dark Mode" : "Light Mode";
};

export default DarkModeStatus;
