import { executeGraphql } from "@api/executeGraphql"
import { OrderAddItemDocument, ProductGetByIdDocument } from "@gql/graphql"

export const addOrderItem = async (orderId: string, productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	})

	if (!product) {
		throw new Error(`Product with id ${productId} not found`)
	}

	await executeGraphql(OrderAddItemDocument, {
		orderId,
		productId,
		productTotal: product.price,
	})
}
