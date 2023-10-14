import React from "react"
import { ActiveLink } from "../atoms/ActiveLink"

export const Navbar = () => {
	return (
		<nav className="flex gap-8 bg-white px-6 py-4 shadow">
			<ActiveLink href="/" text="Home" />
			<ActiveLink href="/products" text="All" exact={false} />
			<ActiveLink href="/categories/t-shirts" text="T-shirts" exact={false} />
			<ActiveLink href="/categories/hoodies" text="Hoodies" exact={false} />
			<ActiveLink href="/categories/accessories" text="Accessories" exact={false} />
		</nav>
	)
}
