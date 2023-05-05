import {
	generateRegistrationOptions,
	verifyRegistrationResponse,
} from "@simplewebauthn/server";

interface User {
	id: string;
	username: string;
}

interface Authenticator {
	credentialID: BufferSource;
	transports: AuthenticatorTransport[];
}

const rpName = "Passkeys Demo by Milovan Gudelj";
const rpID = "passkeys.vercel.app";
const origin = `https://${rpID}`;

const getUser = async (request: Request) => {
	const { id } = await request.json();
	return { id, username: "Milovan Gudelj" };
};

const getUserAuthenticators = async (
	userID: string
): Promise<Authenticator[]> => {
	return [
		{
			credentialID: "credentialID" as unknown as BufferSource,
			transports: ["usb", "nfc"],
		},
	];
};

const setUserCurrentChallenge = async (userID: string, challenge: string) => {
	return;
};

export async function GET(request: Request) {
	const user = await getUser(request);
	const userAuthenticators = await getUserAuthenticators(user.id);

	const options = generateRegistrationOptions({
		rpName,
		rpID,
		userID: user.id,
		userName: user.username,
		// Don't prompt users for additional information about the authenticator
		// (Recommended for smoother UX)
		attestationType: "none",
		// Prevent users from re-registering existing authenticators
		excludeCredentials: userAuthenticators.map((authenticator) => ({
			id: authenticator.credentialID,
			type: "public-key",
			// Optional
			transports: authenticator.transports,
		})),
		authenticatorSelection: {
			residentKey: "required", // a.k.a. "Discoverable Credentials"
			userVerification: "preferred",
		},
	});

	await setUserCurrentChallenge(user.id, options.challenge);

	return new Response(JSON.stringify(options));
}
