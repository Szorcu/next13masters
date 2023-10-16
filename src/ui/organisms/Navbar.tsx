import React from "react"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { NavbarLink } from "@ui/molecules/NavbarLink"
import { SearchBox } from "@ui/atoms/SearchBox"

export const Navbar = () => {
	return (
		<div className="border-b-1 sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
			<nav className="h-full">
				<ul className="flex h-full items-center gap-8 text-gray-500">
					<NavbarLink href="/" text="Home" />
					<NavbarLink href="/products" text="All" exact={false} />
					<NavbarLink href="/categories/t-shirts" text="T-shirts" exact={false} />
					<NavbarLink href="/categories/hoodies" text="Hoodies" exact={false} />
					<NavbarLink href="/categories/accessories" text="Accessories" exact={false} />
				</ul>
			</nav>
			<div className="flex w-full max-w-20rem items-center gap-4">
				<SearchBox />
				<Link href="/cart">
					<ShoppingCart className="text-sm text-gray-500 hover:cursor-pointer hover:text-yellow-400" />
				</Link>
			</div>
		</div>
	)
}
