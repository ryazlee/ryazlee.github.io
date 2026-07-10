import React, { useEffect, useRef } from "react";
import { use100vh } from "react-div-100vh";
import { Main } from "components/Main";
import { Projects } from "components/Projects";
import Frame from "components/layout/Frame";
import Header from "components/layout/Header";
import { ColorModeProvider } from "context/ColorModeContext";
import "index.css";

const ThemedApp: React.FC = () => {
	const height = use100vh();
	const locked = useRef(false);

	useEffect(() => {
		const scrollTo = (id: "hero" | "projects") => {
			if (locked.current) return;
			locked.current = true;
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
			window.setTimeout(() => {
				locked.current = false;
			}, 900);
		};

		const onWheel = (e: WheelEvent) => {
			if (locked.current) {
				e.preventDefault();
				return;
			}

			const projects = document.getElementById("projects");
			if (!projects) return;

			const projectsTop = projects.getBoundingClientRect().top;
			const scrollingDown = e.deltaY > 8;
			const scrollingUp = e.deltaY < -8;

			if (scrollingDown && projectsTop > 80) {
				e.preventDefault();
				scrollTo("projects");
				return;
			}

			if (scrollingUp && projectsTop > -80 && projectsTop < 80) {
				e.preventDefault();
				scrollTo("hero");
			}
		};

		window.addEventListener("wheel", onWheel, { passive: false });
		return () => window.removeEventListener("wheel", onWheel);
	}, []);

	return (
		<>
			<div
				aria-hidden
				className="pointer-events-none fixed inset-0 -z-10"
				style={{
					background: `
						radial-gradient(ellipse 90% 55% at 50% -15%, var(--bg-accent), transparent 65%),
						radial-gradient(ellipse 50% 45% at 100% 100%, var(--primary-soft), transparent 50%),
						radial-gradient(ellipse 40% 35% at 0% 80%, var(--primary-soft), transparent 45%),
						var(--bg)
					`,
				}}
			/>
			<Frame />
			<Header />
			<section
				id="hero"
				className="relative flex flex-col items-center justify-center"
				style={{ minHeight: height ?? "100vh" }}
			>
				<div className="max-w-prose w-full px-6">
					<Main />
				</div>
				<button
					onClick={() =>
						document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
					}
					className="absolute bottom-10 flex flex-col items-center gap-2 text-faint hover:text-muted transition-colors duration-300 cursor-pointer bg-transparent border-none animate-fade-in delay-4"
					aria-label="Scroll to projects"
				>
					<span className="text-[10px] tracking-[0.2em] uppercase font-medium">
						Projects
					</span>
					<svg
						className="w-3.5 h-3.5 animate-bounce"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
			</section>
			<section
				id="projects"
				className="flex flex-col items-center justify-center"
				style={{ minHeight: height ?? "100vh" }}
			>
				<div className="max-w-prose w-full px-6 py-20">
					<Projects />
				</div>
			</section>
		</>
	);
};

export const App: React.FC = () => (
	<ColorModeProvider>
		<ThemedApp />
	</ColorModeProvider>
);
