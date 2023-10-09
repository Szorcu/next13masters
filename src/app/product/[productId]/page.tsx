import React from "react"
import { type Metadata } from "next"
import { getProductById } from "@/api/getProductById"

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
			<h1 className="text-lg font-bold">{product.title}</h1>
			<p className="mb-4 mt-2">{product.description}</p>
			<p>{product.longDescription}</p>
		</div>
	)
}

export default ProductDetailsPage
