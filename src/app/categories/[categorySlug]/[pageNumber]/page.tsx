import React from "react"
import { notFound } from "next/navigation"
import { getProductsByCategorySlug } from "@api/calls/getProductsByCategorySlug"
import { ProductList } from "@ui/organisms/ProductList"
import { capitalizeString } from "@utils/capitalizeString"

type CategoryProductsPageProps = {
	params: {
		categorySlug: string
		pageNumber: string
	}
}

export const generateMetadata = ({ params }: CategoryProductsPageProps) => {
	const { categorySlug } = params

	const categoryName = capitalizeString(categorySlug)

	return {
		title: `Shop - ${categoryName}`,
	}
}

const CategoryProductsPage = async ({ params }: CategoryProductsPageProps) => {
	const { categorySlug, pageNumber } = params
	const categoryName = capitalizeString(categorySlug)

	const products = await getProductsByCategorySlug(categorySlug, parseInt(pageNumber))

	if (products.length === 0) {
		notFound()
	}

	return (
		<section className="grid gap-8">
			<header>
				<h1 className="text-xl font-bold">{categoryName}</h1>
			</header>

			<ProductList {...{ products }} />
		</section>
	)
}

export default CategoryProductsPage
