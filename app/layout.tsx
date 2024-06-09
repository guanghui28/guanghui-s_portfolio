import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
	title: "GuangHui | Portfolio",
	description: "GuangHui is becoming a fullstack Web Dev.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} bg-gray-50 text-gray-950`}>
				{children}
			</body>
		</html>
	);
}
