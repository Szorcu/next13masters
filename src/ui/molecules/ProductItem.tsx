import React from "react"
import { ProductItemCoverImg } from "../atoms/ProductItemCoverImg"
import { ProductItemDescription } from "../atoms/ProductItemDescription"
import { type Product } from "@ui/types"

type ProductItemProps = {
	product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<li>
			<article className="grid cursor-pointer gap-2">
				<ProductItemCoverImg {...product.coverImage} />
				<ProductItemDescription {...product} />
			</article>
		</li>
	)
}
