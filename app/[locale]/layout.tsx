import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { Inter } from "next/font/google";

import { Navbar } from "@components";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	preload: true,
	weight: ["400", "500", "700"],
	variable: "--inter-font",
});

export const metadata = {
	title: "Passkeys",
	description:
		"Passkeys are unique cryptographic keys stored on a user's device for secure and convenient authentication.",
	icons: {
		icon: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/images/favicon/favicon-dark.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/images/favicon/favicon.png",
				media: "(prefers-color-scheme: dark)",
			},
		],
	},
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}) {
	const locale = await getLocale();

	// Show a 404 error if the user requests an unknown locale
	if (params.locale !== locale) {
		notFound();
	}

	return (
		<html lang={locale} className={inter.variable}>
			<body className="bg-gray-900 text-gray-50">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
