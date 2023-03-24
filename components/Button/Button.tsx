"use client";

import { Spinner } from "@components/icons";
import { forwardRef } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	variant?: "filled" | "outline";
	loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "filled",
			disabled,
			loading = false,
			children,
			className,
			...props
		},
		ref
	) => {
		const classes = {
			filled: "bg-teal-500 hover:bg-teal-600 text-zinc-900",
			outline:
				"bg-transparent border-2 border-teal-500 hover:bg-teal-500/10 text-teal-500",
		};

		return (
			<button
				disabled={disabled || loading}
				className={`px-4 py-2 relative rounded text-base font-medium leading-6 focus:outline-4 focus-visible:outline-4 focus-visible:outline-teal-800 outline-offset-0 outline-none ${classes[variant]} transition ${className}`}
				ref={ref}
				{...props}
			>
				<span
					className={`${
						loading
							? "select-none pointer-events-none invisible"
							: "visible"
					}`}
				>
					{children}
				</span>
				{loading && (
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block">
						<Spinner />
					</span>
				)}
			</button>
		);
	}
);

Button.displayName = "Button";
