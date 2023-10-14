import React from "react"
import { getProductsBySearchQuery } from "@api/calls/getProductsBySearchQuery"
import { ProductList } from "@ui/organisms/ProductList"

type SearchPageProps = {
	searchParams: Record<string, string | string[]>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
	const query = searchParams.query.toString()

	const products = await getProductsBySearchQuery(query)
	const productsCount = products.length

	const getItemWord = () => {
		return productsCount === 1 ? "item" : "items"
	}

	return (
		<main className="flex flex-1 flex-col gap-8">
			<header>
				<h1 className="text-xl font-bold">
					{`Found ${productsCount} ${getItemWord()} for phrase "${query}"`}
				</h1>
			</header>

			<section className="flex flex-1 flex-col justify-between gap-6">
				<ProductList {...{ products }} />
			</section>
		</main>
	)
}

export default SearchPage
