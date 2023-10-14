import React from "react"
import { getProductsRelated } from "@api/calls/getProductsRelated"
import { type ProductDetailFragment } from "@gql/graphql"
import { ProductItem } from "@ui/molecules/ProductItem"

type RelatedProductsProps = {
	product: ProductDetailFragment
}

export const RelatedProducts = async ({ product }: RelatedProductsProps) => {
	const { categories, collections } = product

	const productCategorySlug = categories[0] ? categories[0].slug : ""
	const productCollectionSlug = collections[0] ? collections[0].slug : ""

	const relatedProducts = await getProductsRelated(productCategorySlug, productCollectionSlug)

	return (
		<ul
			className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
			data-testid="related-products"
		>
			{relatedProducts.map((product) => (
				<ProductItem key={product.id} {...{ product }} />
			))}
		</ul>
	)
}
