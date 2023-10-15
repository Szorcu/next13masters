import { executeGraphql } from "@api/executeGraphql"
import { CollectionsGetBySlugDocument } from "@gql/graphql"

export const getCollectionBySlug = async (collectionSlug: string) => {
	const { collections } = await executeGraphql(CollectionsGetBySlugDocument, {
		slug: collectionSlug,
	})

	return collections.length !== 0 ? collections[0] : null
}
