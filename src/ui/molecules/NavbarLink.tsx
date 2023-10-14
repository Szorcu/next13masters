import React from "react"
import { type Route } from "next"
import { ActiveLink } from "@ui/atoms/ActiveLink"

type NavbarLinkProps<T extends string> = {
	text: string
	href: Route<T>

	exact?: boolean
}

export const NavbarLink = <T extends string>({ text, href, exact }: NavbarLinkProps<T>) => {
	return (
		<ActiveLink
			className="min-w-3rem py-5 text-center hover:border-b-2 hover:border-gray-300 hover:text-gray-300"
			activeClassName="border-b-2 border-yellow-300"
			{...{ text, href, exact }}
		/>
	)
}
