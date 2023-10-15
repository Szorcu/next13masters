import React from "react"
import { type ReviewListItemFragment } from "@gql/graphql"
import { ReviewItem } from "@ui/atoms/ReviewItem"

type ReviewListProps = {
	reviews: ReviewListItemFragment[]
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
	const reviewsNumber = reviews.length

	return reviewsNumber > 0 ? (
		<ul className="flex w-full flex-col gap-4">
			{reviews.map((review) => {
				return <ReviewItem key={review.id} {...{ review }} />
			})}
		</ul>
	) : (
		<p>No reviews added yet.</p>
	)
}
