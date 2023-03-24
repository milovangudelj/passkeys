"use client";

import { GithubLogo } from "@phosphor-icons/react";
import NextLink from "next/link";

export const NavbarCredits = () => {
	return (
		<NextLink
			href={"https://github.com/milovangudelj"}
			target="_blank"
			className="text-xs inline-flex items-center gap-2 font-medium opacity-60 hover:opacity-100 transition"
		>
			by @milovangudelj{" "}
			<span>
				<GithubLogo aria-hidden={true} className="w-4 h-4" weight="bold" />
			</span>
		</NextLink>
	);
};
