import { generateAuthenticationOptions } from "@simplewebauthn/server";

interface User {
	id: string;
	username: string;
}

interface Authenticator {
	credentialID: BufferSource;
	transports: AuthenticatorTransport[];
}

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

	const options = generateAuthenticationOptions({
		// Require users to use a previously-registered authenticator
		allowCredentials: userAuthenticators.map((authenticator) => ({
			id: authenticator.credentialID,
			type: "public-key",
			// Optional
			transports: authenticator.transports,
		})),
		userVerification: "preferred",
	});

	await setUserCurrentChallenge(user.id, options.challenge);

	return new Response("Hello, Next.js!");
}
