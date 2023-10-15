import { executeGraphql } from "@api/executeGraphql"
import { CollectionsGetListDocument } from "@gql/graphql"

export const getCollections = async () => {
	const { collections } = await executeGraphql(CollectionsGetListDocument)

	return collections
}
