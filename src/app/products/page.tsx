import axios from "axios"
import { ProductList } from "@/ui/organisms/ProductList"
import { type Product } from "@/ui/types"

const ProductsPage = async () => {
	const response = await axios.get("https://naszsklep-api.vercel.app/api/products?take=20")
	const products = response.data as Product[]

	return (
		<section>
			<ProductList {...{ products }} />
		</section>
	)
}

export default ProductsPage
