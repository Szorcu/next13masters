import React from "react"
import { ProductList } from "./ProductList"
import { getProductsRelated } from "@api/calls/getProductsRelated"
import { type ProductDetailFragment } from "@gql/graphql"

type RelatedProductsProps = {
	product: ProductDetailFragment
}

export const RelatedProducts = async ({ product }: RelatedProductsProps) => {
	const { categories, collections } = product

	const productCategorySlug = categories[0] ? categories[0].slug : ""
	const productCollectionSlug = collections[0] ? collections[0].slug : ""

	const relatedProducts = await getProductsRelated(productCategorySlug, productCollectionSlug)

	return <ProductList products={relatedProducts} data-testid="related-products" />
}
