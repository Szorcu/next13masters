import React from "react"
import Link from "next/link"
import { ProductItemCoverImg } from "../atoms/ProductItemCoverImg"
import { ProductItemDescription } from "../atoms/ProductItemDescription"
import { type ProductListItemFragment } from "@/gql/graphql"

type ProductItemProps = {
	product: ProductListItemFragment
}

export const ProductItem = ({ product }: ProductItemProps) => {
	const { id, images, name, categories } = product

	const imageSrc = images[0].url
	const categoryName = categories[0].name

	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="grid cursor-pointer gap-2 rounded-sm bg-white transition-shadow duration-300 hover:shadow-sm">
					<ProductItemCoverImg src={imageSrc} alt={name} />
					<ProductItemDescription {...product} category={categoryName} />
				</article>
			</Link>
		</li>
	)
}
