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
			<body className={`${roboto.className} bg-gray-50 text-gray-950 relative`}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] w-[31.5rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] w-[50rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-5rem]" />
				{children}
			</body>
		</html>
	);
}
