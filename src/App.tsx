import React from "react";
import { use100vh } from "react-div-100vh";
import { Main } from "./components/Main";
import Frame from "./components/layout/Frame";
import Header from "./components/layout/Header";
import "./index.css";
import { Projects } from "./components/Projects";

const Section: React.FC<{
	children: React.ReactNode;
	height: number | null;
}> = ({ children, height }) => (
	<section
		className="min-h-screen flex items-center justify-center"
		style={{ minHeight: height ?? "100vh" }}
	>
		{children}
	</section>
);

export const App: React.FC = () => {
	const height = use100vh();

	return (
		<div>
			<Frame />
			<Header />
			<Section height={height}>
				<Main />
			</Section>
			<Section height={height}>
				<Projects />
			</Section>
		</div>
	);
};
