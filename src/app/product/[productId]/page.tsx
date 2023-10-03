import React from "react"

type ProductDetailsPageProps = {
	params: {
		productId: string
	}
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
	const { productId } = params

	return <div>ProductDetailsPage {productId}</div>
}

export default ProductDetailsPage
