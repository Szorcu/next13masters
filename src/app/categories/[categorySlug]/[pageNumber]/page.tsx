import React from "react"
import { notFound } from "next/navigation"
import { getProductsByCategorySlug } from "@api/calls/getProductsByCategorySlug"
import { ProductList } from "@ui/organisms/ProductList"
import { capitalizeString } from "@utils/capitalizeString"
import { ProductsPagination } from "@ui/organisms/ProductsPagination"
import { getProductsCountByCategory } from "@api/calls/getProductsCountByCategory"

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
	const allProductsCount = await getProductsCountByCategory(categorySlug)

	if (products.length === 0) {
		notFound()
	}

	return (
		<main className="flex flex-1 flex-col gap-8">
			<header>
				<h1 className="text-xl font-bold">{categoryName}</h1>
			</header>

			<section className="flex flex-1 flex-col justify-between gap-6">
				<ProductList {...{ products }} />
				<ProductsPagination
					productsCount={allProductsCount}
					pathBase={`categories/${categorySlug}`}
				/>
			</section>
		</main>
	)
}

export default CategoryProductsPage
