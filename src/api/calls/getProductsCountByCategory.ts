import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetCountByCategoryDocument } from "@gql/graphql"

export const getProductsCountByCategory = async (categorySlug: string) => {
	const { productsConnection } = await executeGraphql(ProductsGetCountByCategoryDocument, {
		categorySlug,
	})

	return productsConnection.aggregate.count
}
