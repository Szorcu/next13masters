import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetListDocument } from "@gql/graphql"

export const getProducts = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument)

	return products
}
