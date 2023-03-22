import Image from "next/image";

import { Container, MembersMarquee } from "@components";
import { PasskeyImportanceIllustration } from "@components/PasskeyImportanceIllustration/PasskeyImportanceIllustration";

import fidoLogo from "@images/FIDO-Alliance-logo.png";

export default async function Home() {
	return (
		<main>
			<Container className="py-[164px]">
				<div className="max-w-[540px] flex flex-col gap-10">
					<h1 className="text-6xl leading-tight font-bold">
						Simpler. Safer. Smarter.
					</h1>
					<p className="text-xl font-medium leading-tight opacity-80">
						Passkeys are unique cryptographic keys stored on a user&apos;s
						device for secure and convenient authentication.
					</p>
				</div>
			</Container>
			<Container>
				<span className="text-base leading-tight font-medium tracking-[0.5px] opacity-60 uppercase">
					A joint initiative of the FIDO alliance
				</span>
			</Container>
			<MembersMarquee />
			<Container className="py-[164px] flex items-center gap-40">
				<div className="max-w-[540px] flex flex-col gap-10">
					<h2 className="text-5xl font-bold leading-tight">
						What are passkeys?
					</h2>
					<p className="text-base opacity-80">
						Passkeys are a next generation authentication technology meant
						to be a replacement for passwords. They are backed by the FIDO
						Alliance, a consortium of over 400 companies, including
						Google, Microsoft, and Apple.
					</p>
				</div>
				<span className="mx-auto opacity-80">
					<Image
						src={fidoLogo}
						height={164}
						alt="FIDO Alliance Logo"
						placeholder="blur"
						className="pointer-events-none select-none"
					/>
				</span>
			</Container>
			<Container className="py-[164px] flex items-center gap-40">
				<PasskeyImportanceIllustration />
				<div className="max-w-[540px] flex flex-col gap-10">
					<h2 className="text-5xl font-bold leading-tight">
						Why are they important?
					</h2>
					<p className="text-base opacity-80">
						Traditional password-based authentication is vulnerable to
						various types of attacks such as phishing, brute force
						attacks, and password reuse attacks.
					</p>
					<p className="text-base opacity-80">
						FIDO passkeys, on the other hand, use public-key cryptography
						to create a unique key pair for each user, making it extremely
						difficult for attackers to compromise the authentication
						process.
					</p>
				</div>
			</Container>
		</main>
	);
}
