import React from "react"
import { NavbarLink } from "@ui/molecules/NavbarLink"
import { SearchBox } from "@ui/atoms/SearchBox"

export const Navbar = () => {
	return (
		<nav className="border-b-1 flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
			<ul className="flex h-full items-center gap-8">
				<NavbarLink href="/" text="Home" />
				<NavbarLink href="/products" text="All" exact={false} />
				<NavbarLink href="/categories/t-shirts" text="T-shirts" exact={false} />
				<NavbarLink href="/categories/hoodies" text="Hoodies" exact={false} />
				<NavbarLink href="/categories/accessories" text="Accessories" exact={false} />
			</ul>

			<SearchBox />
		</nav>
	)
}
