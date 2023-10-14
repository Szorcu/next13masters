import React from "react"
import { type CollectionListItemFragment } from "@gql/graphql"

type CollectionItemProps = {
	collection: CollectionListItemFragment
}

export const CollectionItem = ({ collection }: CollectionItemProps) => {
	const { image, name, slug } = collection

	return (
		<li className="hover:cursor-pointer">
			<div className="grid gap-2">
				<img src={image.url} alt={name} />
				<p className="font-bold">{name}</p>
			</div>
		</li>
	)
}
