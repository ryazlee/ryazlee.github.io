import React from "react";

const LINK_CLASSES = [
  "relative inline overflow-hidden font-medium text-primary no-underline",
  "after:content-[''] after:absolute after:z-[-1] after:right-0 after:w-0 after:bottom-[-3px]",
  "after:bg-primary after:h-[2px] after:transition-[width] after:duration-300 after:ease-out",
  "hover:no-underline hover:text-primary hover:after:left-0 hover:after:right-auto hover:after:w-full",
  "focus:no-underline focus:text-primary focus:after:left-0 focus:after:right-auto focus:after:w-full",
  "active:no-underline active:text-primary active:after:left-0 active:after:right-auto active:after:w-full",
].join(" ");

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => (
  <a className={`${LINK_CLASSES}${className ? ` ${className}` : ""}`} {...props} />
);
