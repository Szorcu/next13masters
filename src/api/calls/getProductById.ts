import { executeGraphql } from "@api/executeGraphql"
import { ProductGetByIdDocument } from "@gql/graphql"

export const getProductById = async (productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	})

	return product ?? null
}
