"use client";

import { Passkey } from "@components/icons";
import {
	Bank,
	EyeSlash,
	FileLock,
	Fingerprint,
	FolderLock,
	Password,
	ShieldCheck,
} from "@phosphor-icons/react";

export const PasskeyImportanceIllustration = () => {
	return (
		<div className="mx-auto relative w-[300px] flex items-center justify-center aspect-square rounded-full">
			<span className="w-[60px] relative z-[2] aspect-square flex items-center justify-center rounded-full bg-zinc-50">
				<Passkey className="text-zinc-900" width={36} height={36} />
			</span>
			<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-1 rounded-full">
					<Fingerprint width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-2 rounded-full">
					<FolderLock width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-3 rounded-full">
					<Password width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-4 rounded-full">
					<ShieldCheck width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-5 rounded-full">
					<FileLock width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-6 rounded-full">
					<Bank width={36} height={36} />
				</span>
				<span className="flex w-[60px] aspect-square absolute z-[1] items-center justify-center animate-orbit-7 rounded-full">
					<EyeSlash width={36} height={36} />
				</span>
				<div className="absolute z-0 w-[400px] aspect-square bg-gradient-radial from-teal-500/50 rounded-full to-teal-500/0 blur-2xl"></div>
			</div>
		</div>
	);
};
