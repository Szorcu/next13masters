import React from "react"
import { type Metadata } from "next"
import { getProductById } from "@/api/getProductById"
import { ProductItemCoverImg } from "@/ui/atoms/ProductItemCoverImg"

type ProductDetailsPageProps = {
	params: {
		productId: string
	}
}

export const generateMetadata = async ({ params }: ProductDetailsPageProps): Promise<Metadata> => {
	const { productId } = params

	const product = await getProductById(productId)

	return {
		title: `Shop - ${product.title}`,
		description: product.description,
	}
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
	const { productId } = params

	const product = await getProductById(productId)

	return (
		<div>
			<ProductItemCoverImg src={product.image} alt={product.title} />
			<h1 className="mt-8 text-lg font-bold text-gray-800">{product.title}</h1>
			<p className="mt-1 text-gray-500">{product.description}</p>
			<p className="mt-4 text-gray-800">{product.longDescription}</p>
		</div>
	)
}

export default ProductDetailsPage
