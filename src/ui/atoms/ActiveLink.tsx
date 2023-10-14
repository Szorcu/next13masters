"use client"

import clsx from "clsx"
import { type Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type ActiveLinkProps<T extends string> = {
	text: string
	href: Route<T>

	className?: string
	activeClassName?: string
	exact?: boolean
}

export const ActiveLink = <T extends string>({
	text,
	href,
	className,
	activeClassName,
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname()

	const isActive = exact ? pathname === href : pathname.startsWith(href)
	const ariaCurrent = isActive ? "page" : undefined

	return (
		<Link
			className={clsx("hover:text-yellow-300", className, isActive && activeClassName, {
				"text-yellow-400": isActive,
			})}
			href={href}
			aria-current={ariaCurrent}
		>
			{text}
		</Link>
	)
}
