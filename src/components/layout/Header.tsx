import React from "react";
import { useColorMode } from "context/ColorModeContext";
import { connectLinks } from "config";
import { iconButton } from "styles";

const NAV_ICONS = [
	{
		label: "Resume",
		href: connectLinks.resume,
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
				<polyline points="14 2 14 8 20 8" />
				<line x1="8" y1="13" x2="16" y2="13" />
				<line x1="8" y1="17" x2="16" y2="17" />
			</svg>
		),
	},
	{
		label: "LinkedIn",
		href: connectLinks.linkedIn,
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: "GitHub",
		href: connectLinks.github,
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
	{
		label: "Email",
		href: connectLinks.email,
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<rect x="2" y="4" width="20" height="16" rx="2" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			</svg>
		),
	},
];

const Header: React.FC = () => {
	const { isDark, toggle } = useColorMode();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-5 animate-fade-in">
			<div className="flex items-center gap-3.5">
				{NAV_ICONS.map(({ label, href, icon }) => (
					<div key={label} className="relative group">
						<a
							href={href}
							target={label !== "Email" ? "_blank" : undefined}
							rel={label !== "Email" ? "noopener noreferrer" : undefined}
							className={`${iconButton} no-underline block`}
							aria-label={label}
						>
							{icon}
						</a>
						<span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-[10px] tracking-wide whitespace-nowrap bg-fg text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
							{label}
						</span>
					</div>
				))}
				<div className="relative group ml-0.5">
					<button
						onClick={toggle}
						className={`${iconButton} cursor-pointer bg-transparent border-none p-0 flex items-center`}
						aria-label="Toggle dark mode"
					>
						{isDark ? (
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
								<circle cx="12" cy="12" r="4" />
								<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
							</svg>
						) : (
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
							</svg>
						)}
					</button>
					<span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-[10px] tracking-wide whitespace-nowrap bg-fg text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
						{isDark ? "Light" : "Dark"}
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Header;
