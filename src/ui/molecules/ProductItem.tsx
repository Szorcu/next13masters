import React from "react"
import Link from "next/link"
import { ProductItemCoverImg } from "../atoms/ProductItemCoverImg"
import { ProductItemDescription } from "../atoms/ProductItemDescription"
import { type Product } from "@ui/types"

type ProductItemProps = {
	product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
	const { id, image, title } = product

	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="grid cursor-pointer gap-2">
					<ProductItemCoverImg src={image} alt={title} />
					<ProductItemDescription {...product} />
				</article>
			</Link>
		</li>
	)
}
