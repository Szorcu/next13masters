import { ProductGetByIdDocument } from "@gql/graphql"
import { executeGraphql } from "@api/executeGraphql"

export const getProductById = async (productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	})

	return product ?? null
}
