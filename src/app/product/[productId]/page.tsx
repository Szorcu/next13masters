import React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductItemCoverImg } from "@/ui/atoms/ProductItemCoverImg"
import { getProductById } from "@api/calls/getProductById"
import { RelatedProducts } from "@ui/organisms/RelatedProducts"
import { AddReviewForm } from "@ui/molecules/AddReviewForm"
import { ReviewList } from "@ui/molecules/ReviewList"
import { getReviewsByProductId } from "@api/calls/getReviewsByProductId"
import { addReviewAction } from "@api/actions/addReviewAction"
import { FormButton } from "@ui/atoms/FormButton"
import { addProductToCartAction } from "@api/actions/addProductToCartAction"

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
	const reviews = await getReviewsByProductId(productId)

	if (!product) {
		notFound()
	}

	return (
		<main className="grid gap-8 pb-6">
			<section>
				<ProductItemCoverImg src={product.images[0].url} alt={product.name} />
				<h1 className="mt-8 text-xl font-bold text-gray-800">{product.name}</h1>
				<p className="mt-1 text-gray-500">{product.description}</p>

				<form>
					<input type="hidden" name="productId" value={productId} />
					<FormButton formAction={addProductToCartAction}>Add to cart</FormButton>
				</form>
			</section>

			<section>
				<RelatedProducts {...{ product }} />
			</section>

			<section className="flex gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="text-lg font-bold">Add your review</h2>
					<AddReviewForm action={addReviewAction} className="w-96" />
				</div>

				<div className="flex w-full flex-col gap-4">
					<h3 className="text-lg font-bold">Reviews</h3>
					<ReviewList {...{ reviews }} />
				</div>
			</section>
		</main>
	)
}

export default ProductDetailsPage
