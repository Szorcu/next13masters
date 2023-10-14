import React from "react"
import { NavbarLink } from "@ui/molecules/NavbarLink"

export const Navbar = () => {
	return (
		<nav className="border-b-1 flex h-16 items-center gap-8 border-b border-slate-200 bg-white px-6">
			<NavbarLink href="/" text="Home" />
			<NavbarLink href="/products" text="All" exact={false} />
			<NavbarLink href="/categories/t-shirts" text="T-shirts" exact={false} />
			<NavbarLink href="/categories/hoodies" text="Hoodies" exact={false} />
			<NavbarLink href="/categories/accessories" text="Accessories" exact={false} />
		</nav>
	)
}
