import { Container, MembersMarquee } from "@components";

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
			<Container className="py-[164px]">
				<div className="max-w-[540px] flex flex-col gap-10">
					<h2 className="text-5xl font-bold leading-tight">
						What are passkeys?
					</h2>
					<p className="text-base opacity-80">
						Passkeys are a new authentication method that aims to replace
						passwords.
					</p>
				</div>
			</Container>
		</main>
	);
}
