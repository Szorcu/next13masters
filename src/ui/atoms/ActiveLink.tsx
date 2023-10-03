"use client"

import clsx from "clsx"
import { type Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type ActiveLinkProps<T extends string> = {
	text: string
	href: Route<T>
}

export const ActiveLink = <T extends string>({ text, href }: ActiveLinkProps<T>) => {
	const pathname = usePathname()

	const isActive = pathname === href

	return (
		<Link
			className={clsx("hover:text-yellow-300", {
				"text-yellow-400": isActive,
			})}
			href={href}
			aria-current={isActive}
		>
			{text}
		</Link>
	)
}
