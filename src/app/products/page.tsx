import { ProductList } from "@/ui/organisms/ProductList"
import { type Product } from "@/ui/types"
import { basicInstance } from "@/api/instance"

const ProductsPage = async () => {
	const response = await basicInstance.get("products?take=20")
	const products = response.data as Product[]

	return (
		<section>
			<ProductList {...{ products }} />
		</section>
	)
}

export default ProductsPage
