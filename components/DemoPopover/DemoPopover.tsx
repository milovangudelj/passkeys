"use client";

import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { X } from "@phosphor-icons/react";

import { Button } from "@components";

export function DemoPopover() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button aria-label="Try the Demo">Try the Demo</Button>
			</Popover.Trigger>
			<Popover.Content
				className="bg-zinc-800 w-[340px] rounded shadow-[0px_8px_32px_rgba(0,_0,_0,_0.1)] p-8 will-change-transform data-open:data-top:animate-sdaf data-open:data-bottom:animate-suaf data-open:data-left:animate-sraf data-open:data-right:animate-slaf"
				sideOffset={8}
			>
				<div className="flex flex-col gap-8">
					<p className="text-xl font-medium leading-6">
						Sign up or sign in
					</p>
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<label htmlFor="email">
							<span className="text-sm leading-4 opacity-60">Email</span>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="john.doe@example.com"
								autoComplete="webauthn email"
								className="mt-1 block w-full bg-zinc-800 placeholder:text-zinc-400 text-zinc-50 rounded border-zinc-600 focus:border-teal-600 focus:ring-4 focus:ring-teal-800 focus:ring-opacity-50"
							/>
						</label>
						<Button type="submit" loading={loading}>
							Continue
						</Button>
					</form>
					<div className="flex items-center gap-4">
						<span className="inline-block flex-1 h-px bg-slate-50 opacity-10"></span>
						<span className="text-xs leading-3 opacity-60">or</span>
						<span className="inline-block flex-1 h-px bg-slate-50 opacity-10"></span>
					</div>
					<Button variant="outline">Sign in with a passkey</Button>
				</div>
				<Popover.Close
					className="absolute text-zinc-50/60 hover:text-zinc-50/100 top-2 right-2 hover:bg-zinc-50/10 focus:bg-zinc-50/20 rounded-full p-2 transition focus-visible:outline-2 focus-visible:outline-zinc-50/60 outline-none"
					aria-label="Close"
				>
					<X />
				</Popover.Close>
				<Popover.Arrow
					className="text-zinc-800 fill-current"
					width={10.67}
					height={8}
				/>
			</Popover.Content>
		</Popover.Root>
	);
}
