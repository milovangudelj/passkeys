"use client";

import { useState } from "react";
import {
	startRegistration,
	startAuthentication,
} from "@simplewebauthn/browser";

import * as Popover from "@radix-ui/react-popover";
import { X } from "@phosphor-icons/react";

import { Button } from "@components";

export function DemoPopover() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const resp = await fetch(
			`${process.env.NEXT_PUBLIC_WEBSITE_URL}/generateRegistrationOptions`
		);

		let attResp;
		try {
			// Pass the options to the authenticator and wait for a response
			attResp = await startRegistration(await resp.json());
		} catch (error: any) {
			// Some basic error handling
			if (error.name === "InvalidStateError") {
				setError(
					"Error: Authenticator was probably already registered by user"
				);
			} else {
				setError(error);
			}

			throw error;
		}

		// POST the response to the endpoint that calls
		// @simplewebauthn/server -> verifyRegistrationResponse()
		const verificationResp = await fetch(
			`${process.env.NEXT_PUBLIC_WEBSITE_URL}/verifyRegistrationResponse`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(attResp),
			}
		);

		// Wait for the results of verification
		const verificationJSON = await verificationResp.json();

		// Show UI appropriate for the `verified` status
		if (verificationJSON && verificationJSON.verified) {
			setSuccess("Success!");
		} else {
			setError(
				`Oh no, something went wrong! Response: <pre>${JSON.stringify(
					verificationJSON
				)}</pre>`
			);
		}

		setLoading(false);
	};

	const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = async (
		e
	) => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);

		const resp = await fetch(
			`${process.env.NEXT_PUBLIC_WEBSITE_URL}/generateAuthenticationOptions`
		);

		let asseResp;
		try {
			// Pass the options to the authenticator and wait for a response
			asseResp = await startAuthentication(await resp.json(), true);
		} catch (error: any) {
			// Some basic error handling
			setError(error);
			throw error;
		}

		// POST the response to the endpoint that calls
		// @simplewebauthn/server -> verifyAuthenticationResponse()
		const verificationResp = await fetch(
			`${process.env.NEXT_PUBLIC_WEBSITE_URL}/verifyAuthenticationResponse`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(asseResp),
			}
		);

		// Wait for the results of verification
		const verificationJSON = await verificationResp.json();

		// Show UI appropriate for the `verified` status
		if (verificationJSON && verificationJSON.verified) {
			setSuccess("Success!");
		} else {
			setError(
				`Oh no, something went wrong! Response: <pre>${JSON.stringify(
					verificationJSON
				)}</pre>`
			);
		}
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
					<Button variant="outline" onClick={handleSignIn}>
						Sign in with a passkey
					</Button>
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
