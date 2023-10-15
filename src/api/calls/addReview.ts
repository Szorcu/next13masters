import { ReviewCreateDocument } from "@gql/graphql"
import { executeGraphql } from "@api/executeGraphql"

type AddReviewData = {
	headline: string
	content: string
	rating: number
	name: string
	email: string
}

export const addReview = async (data: AddReviewData) => {
	const { createReview } = await executeGraphql(ReviewCreateDocument, {
		...data,
	})

	return createReview ?? null
}
