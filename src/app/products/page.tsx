import { ProductList } from "@/ui/organisms/ProductList"
import { type Product } from "@/ui/types"

const products: Product[] = [
	{
		id: 1,
		name: "Converse Shoes",
		category: "Shoes",
		price: 1999,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Converse Shoes",
		},
	},
	{
		id: 2,
		name: "Mountain Backpack",
		category: "Accessories",
		price: 2999,
		coverImage: {
			src: "/product_2.jpg",
			alt: "Mountain Backpack",
		},
	},
	{
		id: 3,
		name: "Jeans Jacket",
		category: "Clothes",
		price: 4999,
		coverImage: {
			src: "/product_3.jpg",
			alt: "Jeans Jacket",
		},
	},
	{
		id: 4,
		name: "Rain Jacket",
		category: "Clothes",
		price: 1599,
		coverImage: {
			src: "/product_4.jpg",
			alt: "Rain Jacket",
		},
	},
]

const ProductsPage = () => {
	return (
		<section>
			<ProductList {...{ products }} />
		</section>
	)
}

export default ProductsPage
