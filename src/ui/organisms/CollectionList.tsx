import React from "react"
import { type CollectionListItemFragment } from "@gql/graphql"
import { CollectionItem } from "@ui/molecules/CollectionItem"

type CollectionListProps = {
	collections: CollectionListItemFragment[]
}

export const CollectionList = ({ collections }: CollectionListProps) => {
	return (
		<ul className="flex gap-4" data-testid="products-list">
			{collections.map((collection) => (
				<CollectionItem key={collection.id} {...{ collection }} />
			))}
		</ul>
	)
}
