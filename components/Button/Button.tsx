"use client";

import { forwardRef } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	variant?: "filled" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "filled", children, className, ...props }, ref) => {
		const classes = {
			filled: "bg-teal-500 hover:bg-teal-600 text-gray-900",
			outline:
				"bg-transparent border-2 border-teal-500 hover:bg-teal-500/10 text-teal-500",
		};

		return (
			<button
				className={`px-4 py-2 rounded text-base font-medium leading-6 focus:outline-4 focus-visible:outline-4 focus-visible:outline-teal-800 outline-offset-0 outline-none ${classes[variant]} transition ${className}`}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
