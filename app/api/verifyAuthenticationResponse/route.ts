import {
	VerifyAuthenticationResponseOpts,
	verifyAuthenticationResponse,
} from "@simplewebauthn/server";

const rpName = "Passkeys Demo by Milovan Gudelj";
const rpID = "passkeys.vercel.app";
const origin = `https://${rpID}`;

const getUser = async (request: Request) => {
	const { id } = await request.json();
	return { id, username: "Milovan Gudelj" };
};

const getUserAuthenticator = async (
	userID: string,
	authenticatorID: string
) => {
	return {
		credentialID: "credentialID" as unknown as Uint8Array,
		credentialPublicKey: "credentialPublicKey" as unknown as Uint8Array,
		counter: 0,
		transports: ["usb", "nfc"] as any,
	};
};

const getUserCurrentChallenge = async (userID: string) => {
	return "challenge";
};

export async function POST(request: Request) {
	const { body } = request;

	const user = await getUser(request);
	const expectedChallenge = await getUserCurrentChallenge(user.id);
	const authenticator = await getUserAuthenticator(user.id, (body as any).id);

	if (!authenticator) {
		throw new Error(
			`Could not find authenticator ${(body as any).id} for user ${user.id}`
		);
	}

	let verification;
	try {
		verification = await verifyAuthenticationResponse({
			response: body as any,
			expectedChallenge,
			expectedOrigin: origin,
			expectedRPID: rpID,
			authenticator,
		});
	} catch (error: any) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }));
	}

	const { verified } = verification;

	return new Response(JSON.stringify({ verified }));
}
