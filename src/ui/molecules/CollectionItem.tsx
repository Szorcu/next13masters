import React from "react"
import Link from "next/link"
import NextImage from "next/image"
import { type CollectionListItemFragment } from "@gql/graphql"

type CollectionItemProps = {
	collection: CollectionListItemFragment
}

export const CollectionItem = ({ collection }: CollectionItemProps) => {
	const { image, name, slug } = collection

	return (
		<li>
			<Link href={`/collections/${slug}`}>
				<div className="grid gap-2">
					<NextImage src={image.url} width={600} height={400} alt={name} />
					<p className="font-bold">{name}</p>
				</div>
			</Link>
		</li>
	)
}
