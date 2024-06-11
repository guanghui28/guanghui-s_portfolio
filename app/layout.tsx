import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

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
				className={`${roboto.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
			>
				<div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] w-[31.5rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
				<div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] w-[50rem] h-[31.5rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-5rem]" />

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
