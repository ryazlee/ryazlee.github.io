import React from "react";
import { use100vh } from "react-div-100vh";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Main } from "components/Main";
import { Projects } from "components/Projects";
import { useProjectQueries } from "hooks/useProjectQueries";
import Frame from "components/layout/Frame";
import Header from "components/layout/Header";
import { ColorModeProvider, useColorMode } from "context/ColorModeContext";
import "index.css";

const ThemedApp: React.FC = () => {
	const height = use100vh();
	const { isDark } = useColorMode();
	const { allFailed } = useProjectQueries();

	const theme = createTheme({
		palette: {
			type: isDark ? "dark" : "light",
			background: { default: isDark ? "#111" : "#fff" },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Frame />
			<Header />
			<section
				className="relative flex flex-col items-center justify-center"
				style={{ minHeight: height ?? "100vh" }}
			>
				<div className="max-w-[650px] w-full px-6">
					<Main />
				</div>
				{!allFailed && (
					<button
						onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
						className="absolute bottom-8 flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
						aria-label="Scroll to projects"
					>
						<span className="text-xs tracking-widest uppercase">Projects</span>
						<svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				)}
			</section>
			{!allFailed && (
				<section
					id="projects"
					className="flex flex-col items-center justify-center"
					style={{ minHeight: height ?? "100vh" }}
				>
					<div className="max-w-[650px] w-full px-6 py-16">
						<Projects />
					</div>
				</section>
			)}
		</ThemeProvider>
	);
};

export const App: React.FC = () => (
	<ColorModeProvider>
		<ThemedApp />
	</ColorModeProvider>
);
