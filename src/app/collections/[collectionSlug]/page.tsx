import React from "react"
import { notFound } from "next/navigation"
import { ProductList } from "@ui/organisms/ProductList"
import { getProductsByCollectionSlug } from "@api/calls/getProductsByCollectionSlug"
import { getCollectionBySlug } from "@api/calls/getCollectionBySlug"

type CollectionProductsPageProps = {
	params: {
		collectionSlug: string
	}
}

const CollectionProductsPage = async ({ params }: CollectionProductsPageProps) => {
	const { collectionSlug } = params

	const collectionDetail = await getCollectionBySlug(collectionSlug)
	const products = await getProductsByCollectionSlug(collectionSlug)

	if (!collectionDetail) {
		notFound()
	}

	return (
		<section className="grid gap-8">
			<header className="grid gap-2">
				<h1 className="text-xl font-bold">{collectionDetail?.name}</h1>
				<p className="text-gray-700">{collectionDetail?.description}</p>
			</header>

			<ProductList {...{ products }} />
		</section>
	)
}

export default CollectionProductsPage
