import { ImageResponse } from "next/server"
import { getProductById } from "@api/calls/getProductById"

type ProdoctOGImageProps = {
	params: {
		productId: string
	}
}

export const runtime = "edge"
export const contentType = "image/png"
export const alt = "Shop - product detail"
export const size = {
	width: 300,
	height: 300,
}

const ProdoctOGImage = async ({ params }: ProdoctOGImageProps) => {
	const { productId } = params

	const product = await getProductById(productId)

	if (!product) {
		return new ImageResponse(<div>Product not found</div>)
	}

	const { name, description, images } = product
	const productImageSrc = images[0].url

	return new ImageResponse(
		(
			<div tw="w-full h-full flex gap-4 items-center justify-center bg-gray-100">
				<img src={productImageSrc} {...size} alt={product.name} />

				<div tw="flex flex-col max-w-30rem">
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
			</div>
		),
	)
}

export default ProdoctOGImage
