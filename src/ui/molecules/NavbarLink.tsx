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
		<li className="h-full">
			<ActiveLink
				className="flex h-full min-w-3rem items-center justify-center border-b-2 border-transparent hover:border-gray-300 hover:!text-gray-300"
				activeClassName="border-b-2 !border-yellow-300 hover:!border-gray-300"
				{...{ text, href, exact }}
			/>
		</li>
	)
}
