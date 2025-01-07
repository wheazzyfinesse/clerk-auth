import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Clerk authentication",
	description: "developed by techfinesse",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<ClerkLoading>
						<div className="flex items-center justify-center h-screen text-2xl">
							Loading...
						</div>
					</ClerkLoading>
					<ClerkLoaded>
						<div className="max-w-6xl mx-auto">
							<Navbar />
							<div className="flex flex-col h-screen">{children}</div>
						</div>
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
