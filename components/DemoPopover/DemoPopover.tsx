"use client";

import * as Popover from "@radix-ui/react-popover";
import { X } from "@phosphor-icons/react";

import { Button } from "@components";

export function DemoPopover() {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button aria-label="Try the Demo">Try the Demo</Button>
			</Popover.Trigger>
			<Popover.Content
				className="bg-gray-800 w-[340px] rounded shadow-[0px_8px_32px_rgba(0,_0,_0,_0.1)] p-8 will-change-transform data-open:data-top:animate-sdaf data-open:data-bottom:animate-suaf data-open:data-left:animate-sraf data-open:data-right:animate-slaf"
				sideOffset={8}
			>
				<div className="flex flex-col gap-8">
					<p className="text-xl font-medium leading-6">
						Sign up or sign in
					</p>
					<form className="flex flex-col gap-4">
						<label htmlFor="email">
							<span className="text-sm leading-4 opacity-60">Email</span>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="john.doe@example.com"
								className="mt-1 block w-full bg-gray-800 placeholder:text-gray-400 text-gray-50 rounded border-gray-600 focus:border-teal-600 focus:ring-4 focus:ring-teal-800 focus:ring-opacity-50"
							/>
						</label>
						<Button type="submit">Continue</Button>
					</form>
					<div className="flex items-center gap-4">
						<span className="inline-block flex-1 h-px bg-slate-50 opacity-10"></span>
						<span className="text-xs leading-3 opacity-60">or</span>
						<span className="inline-block flex-1 h-px bg-slate-50 opacity-10"></span>
					</div>
					<Button variant="outline">Sign in with a passkey</Button>
				</div>
				<Popover.Close
					className="absolute top-2 right-2 hover:bg-gray-50/10 focus:bg-gray-50/20 rounded-full p-2 transition focus-visible:outline-2 focus-visible:outline-gray-50/60 outline-none"
					aria-label="Close"
				>
					<X />
				</Popover.Close>
				<Popover.Arrow
					className="text-gray-800 fill-current"
					width={10.67}
					height={8}
				/>
			</Popover.Content>
		</Popover.Root>
	);
}
