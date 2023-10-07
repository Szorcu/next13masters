import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { type ReactNode } from "react"

import { Navbar } from "@/ui/organisms/Navbar"

const robotoFont = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
	title: "next13masters",
	description: "E-commerce site created during next13masters course",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`bg-gray-100 text-gray-800 ${robotoFont.className}`}>
				<Navbar />
				<div className="p-6">{children}</div>
			</body>
		</html>
	)
}
