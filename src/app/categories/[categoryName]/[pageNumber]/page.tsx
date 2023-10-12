import React from "react"
import { notFound } from "next/navigation"
import { getProductsByCategorySlug } from "@api/calls/getProductsByCategorySlug"
import { ProductList } from "@ui/organisms/ProductList"

type CategoryProductsPageProps = {
	params: {
		categoryName: string
		pageNumber: string
	}
}

const CategoryProductsPage = async ({ params }: CategoryProductsPageProps) => {
	const { categoryName, pageNumber } = params

	const products = await getProductsByCategorySlug(categoryName, parseInt(pageNumber))

	if (products.length === 0) {
		notFound()
	}

	return (
		<section>
			<ProductList {...{ products }} />
		</section>
	)
}

export default CategoryProductsPage
