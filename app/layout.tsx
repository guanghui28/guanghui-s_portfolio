import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

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
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${roboto.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] w-[31.5rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] w-[50rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-5rem]" />

				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster position="top-right" />
				</ActiveSectionContextProvider>
				<ThemeSwitch />
			</body>
		</html>
	);
}
