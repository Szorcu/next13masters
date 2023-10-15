import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetByCollectionSlugDocument } from "@gql/graphql"

export const getProductsByCollectionSlug = async (slug: string) => {
	const { products } = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug,
	})

	return products
}
