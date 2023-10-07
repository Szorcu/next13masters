import React from "react"
import { ActiveLink } from "../atoms/ActiveLink"

export const Navbar = () => {
	return (
		<nav className="flex gap-4 bg-white px-6 py-4 shadow">
			<ActiveLink href="/" text="Home" />
			<ActiveLink href="/products" text="All" exact={false} />
		</nav>
	)
}
