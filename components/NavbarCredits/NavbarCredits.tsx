"use client";

import { GithubLogo } from "@phosphor-icons/react";
import NextLink from "next/link";

export const NavbarCredits = () => {
	return (
		<span className="text-xs inline-flex items-center gap-1 font-medium opacity-60 hover:opacity-100 transition">
			by{" "}
			<NextLink href={"https://github.com/milovangudelj"} target="_blank">
				@milovangudelj
			</NextLink>{" "}
			<span>
				<GithubLogo aria-hidden={true} className="w-4 h-4" weight="bold" />
			</span>
		</span>
	);
};
