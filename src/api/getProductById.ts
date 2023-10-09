import { basicInstance } from "./instance"
import { type Product } from "@/ui/types"

export const getProductById = async (productId: string) => {
	const response = await basicInstance.get(`products/${productId}`)
	const productDetails = response.data as Product

	return productDetails
}
