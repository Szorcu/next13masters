import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetRelatedDocument } from "@gql/graphql"

export const getProductsRelated = async (categorySlug: string, collectionSlug: string) => {
	const { products } = await executeGraphql(ProductsGetRelatedDocument, {
		categorySlug,
		collectionSlug,
	})

	return products
}
