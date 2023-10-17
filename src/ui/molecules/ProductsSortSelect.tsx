"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { type ChangeEvent, useState } from "react"

export const ProductsSortSelect = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const sortByOption = searchParams.get("sortBy")

	const [sortBy, setSortBy] = useState(sortByOption ?? undefined)

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSortByValue = e.target.value

		router.push(`/products/1?sortBy=${newSortByValue}`)

		setSortBy(e.target.value)
	}

	return (
		<select value={sortBy} onChange={handleChange}>
			<option value="priceDesc" data-testid="sort-by-price">
				Price (Hight to Low)
			</option>
			<option value="priceAsc" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="ratingDesc" data-testid="sort-by-rating">
				Rating (Hight to Low)
			</option>
			<option value="ratingAsc" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
		</select>
	)
}
