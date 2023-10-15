import { executeGraphql } from "@api/executeGraphql"
import { OrderAddProductDocument, ProductGetByIdDocument } from "@gql/graphql"

export const addProductToCart = async (orderId: string, productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	})

	if (!product) {
		throw new Error(`Product with id ${productId} not found`)
	}

	await executeGraphql(OrderAddProductDocument, {
		orderId,
		productId,
		productTotal: product.price,
	})
}
