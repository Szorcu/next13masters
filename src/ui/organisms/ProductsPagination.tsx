import React from "react"
import { ActiveLink } from "../atoms/ActiveLink"

export const ProductsPagination = () => {
	const pages = [0, 0, 0, 0]

	return (
		<nav aria-label="pagination" className="mt-4 flex w-full justify-center border-t-2 p-2 text-lg">
			<ul className="flex gap-4">
				{pages.map((_, index) => {
					const pageNumer = index + 1

					return (
						<li key={index}>
							<ActiveLink text={pageNumer.toString()} href={`/products/${pageNumer}`} />
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
