import React from "react"
import { ActiveLink } from "../atoms/ActiveLink"
import { PRODUCTS_PER_PAGE } from "@/constants/common"

type ProductsPaginationProps<T extends string> = {
	productsCount: number
	pathBase: "products" | `categories/${string}`
}

export const ProductsPagination = <T extends string>({
	productsCount,
	pathBase,
}: ProductsPaginationProps<T>) => {
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE)
	const pages = Array(numberOfPages).fill(0)

	return (
		<nav aria-label="pagination" className="mt-4 flex w-full justify-center border-t-2 p-2 text-lg">
			<ul className="flex gap-4">
				{pages.map((_, index) => {
					const pageNumer = index + 1

					return (
						<li key={index}>
							<ActiveLink text={pageNumer.toString()} href={`/${pathBase}/${pageNumer}`} />
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
