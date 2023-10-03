import { type Route } from "next"
import Link from "next/link"
import React from "react"

type ActiveLinkProps<T extends string> = {
	text: string
	href: Route<T>
}

export const ActiveLink = <T extends string>({ text, href }: ActiveLinkProps<T>) => {
	return <Link href={href}>{text}</Link>
}
