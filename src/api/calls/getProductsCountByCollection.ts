import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetCountByCollectionDocument } from "@gql/graphql"

export const getProductsCountByCollection = async (collectionSlug: string) => {
	const { productsConnection } = await executeGraphql(ProductsGetCountByCollectionDocument, {
		collectionSlug,
	})

	return productsConnection.aggregate.count
}
