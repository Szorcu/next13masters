import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetAllCountDocument } from "@gql/graphql"

export const getProductsAllCount = async () => {
	const { productsConnection } = await executeGraphql(ProductsGetAllCountDocument)

	return productsConnection.aggregate.count
}
