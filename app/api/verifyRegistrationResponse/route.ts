const { verifyRegistrationResponse } = require("@simplewebauthn/server");

const rpName = "Passkeys Demo by Milovan Gudelj";
const rpID = "passkeys.vercel.app";
const origin = `https://${rpID}`;

const getUser = async (request: Request) => {
	const { id } = await request.json();
	return { id, username: "Milovan Gudelj" };
};

const getUserCurrentChallenge = async (userID: string) => {
	return "challenge";
};

export async function POST(request: Request) {
	const { body } = request;

	const user = await getUser(request);
	const expectedChallenge = await getUserCurrentChallenge(user.id);

	let verification;
	try {
		verification = await verifyRegistrationResponse({
			response: body,
			expectedChallenge,
			expectedOrigin: origin,
			expectedRPID: rpID,
			requireUserVerification: true,
		});
	} catch (error: any) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }));
	}

	const { verified } = verification;

	return new Response(JSON.stringify({ verified }));
}
