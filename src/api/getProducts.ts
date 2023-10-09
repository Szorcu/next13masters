import { basicInstance } from "./instance"
import { type Product } from "@/ui/types"

const PRODUCTS_PER_PAGE = 10

export const getProducts = async (pageNumber: number) => {
	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE
	const response = await basicInstance.get(`products?take=${PRODUCTS_PER_PAGE}&offset=${offset}`)
	const products = response.data as Product[]

	return products
}
