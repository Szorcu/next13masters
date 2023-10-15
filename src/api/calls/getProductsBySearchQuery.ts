import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetBySearchQueryDocument } from "@gql/graphql"

export const getProductsBySearchQuery = async (query: string) => {
	const { products } = await executeGraphql(ProductsGetBySearchQueryDocument, {
		query,
	})

	return products
}
