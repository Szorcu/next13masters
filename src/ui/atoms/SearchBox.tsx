"use client"

import React, { useState, type ChangeEvent, useEffect, type KeyboardEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebounce } from "use-debounce"

export const SearchBox = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const searchQuery = searchParams.get("query")

	const [value, setValue] = useState(searchQuery ?? "")
	const [debouncedValue] = useDebounce(value, 300)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") {
			return
		}

		redirectToSearchPage()
	}

	const redirectToSearchPage = () => {
		router.push(`/search?query=${value}`)
	}

	useEffect(() => {
		if (!debouncedValue) {
			return
		}

		redirectToSearchPage()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue])

	return (
		<input
			className="w-full max-w-20rem rounded-md border bg-gray-50 px-4 py-1 focus:border-yellow-400 focus:outline-none"
			type="text"
			role="searchbox"
			value={value}
			placeholder="Search"
			onChange={handleInputChange}
			onKeyDown={handleKeyDown}
		/>
	)
}
