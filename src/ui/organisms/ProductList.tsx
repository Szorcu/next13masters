import React from "react"
import { type Product } from "@ui/types"
import { ProductItem } from "@ui/molecules/ProductItem"

type ProductListProps = {
	products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} {...{ product }} />
			))}
		</ul>
	)
}
