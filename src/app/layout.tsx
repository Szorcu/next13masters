import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { type ReactNode } from "react"

import { Navbar } from "@/ui/organisms/Navbar"

const robotoFont = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Shop",
	description: "E-commerce site created during next13masters course",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`flex min-h-screen flex-col bg-gray-100 text-gray-800 ${robotoFont.className}`}
			>
				<Navbar />
				<div className="flex flex-grow flex-col px-6 pt-6">{children}</div>
			</body>
		</html>
	)
}
