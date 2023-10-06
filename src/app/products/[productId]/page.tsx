import React from "react"
import { type Product } from "@/ui/types"
import { basicInstance } from "@/api/instance"

type ProductDetailsPageProps = {
	params: {
		productId: string
	}
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
	const { productId } = params

	const response = await basicInstance.get(`products/${productId}`)
	const productDetails = response.data as Product

	return (
		<div>
			<h1>{productDetails.title}</h1>
		</div>
	)
}

export default ProductDetailsPage
