import React from "react";

const LINK_CLASSES = [
	"relative inline overflow-hidden font-medium text-primary no-underline",
	"after:content-[''] after:absolute after:z-[-1] after:left-0 after:right-auto after:w-0 after:bottom-[-2px]",
	"after:bg-primary after:h-px after:transition-[width] after:duration-300 after:ease-out",
	"hover:no-underline hover:text-primary hover:after:w-full",
	"focus:no-underline focus:text-primary focus:after:w-full",
	"active:no-underline active:text-primary active:after:w-full",
].join(" ");

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	className,
	...props
}) => (
	// eslint-disable-next-line jsx-a11y/anchor-has-content
	<a className={`${LINK_CLASSES}${className ? ` ${className}` : ""}`} {...props} />
);
