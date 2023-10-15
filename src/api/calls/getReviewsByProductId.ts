import { executeGraphql } from "@api/executeGraphql"
import { ReviewsGetByProductIdDocument } from "@gql/graphql"

export const getReviewsByProductId = async (productId: string) => {
	const { reviews } = await executeGraphql(ReviewsGetByProductIdDocument, {
		productId,
	})

	return reviews
}
