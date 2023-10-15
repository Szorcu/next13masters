import React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductItemCoverImg } from "@/ui/atoms/ProductItemCoverImg"
import { getProductById } from "@api/calls/getProductById"
import { RelatedProducts } from "@ui/organisms/RelatedProducts"
import { AddReviewForm } from "@ui/molecules/AddReviewForm"

type ProductDetailsPageProps = {
	params: {
		productId: string
	}
}

export const generateMetadata = async ({ params }: ProductDetailsPageProps): Promise<Metadata> => {
	const { productId } = params

	const product = await getProductById(productId)

	return {
		title: `Shop - ${product?.name}`,
		description: product?.description,
	}
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
	const { productId } = params

	const product = await getProductById(productId)

	if (!product) {
		notFound()
	}

	return (
		<main className="grid gap-8">
			<section>
				<ProductItemCoverImg src={product.images[0].url} alt={product.name} />
				<h1 className="mt-8 text-lg font-bold text-gray-800">{product.name}</h1>
				<p className="mt-1 text-gray-500">{product.description}</p>
			</section>

			<section>
				<RelatedProducts {...{ product }} />
			</section>

			<section>
				<AddReviewForm />
			</section>
		</main>
	)
}

export default ProductDetailsPage
