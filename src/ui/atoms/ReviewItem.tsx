import React from "react"
import { type ReviewListItemFragment } from "@gql/graphql"

type ReviewItemProps = {
	review: ReviewListItemFragment
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
	const { content, headline, name, rating } = review

	return (
		<li className="flex w-full flex-col border-b px-2 pb-4">
			<p className="text-lg font-bold">{headline}</p>
			<p>{content}</p>
			<p>Rating: {rating}/5</p>
			<p>Author: {name}</p>
		</li>
	)
}
