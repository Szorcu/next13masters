import { PRODUCTS_PER_PAGE } from "@/constants/common"
import { executeGraphql } from "@api/executeGraphql"
import { type ProductOrderByInput, ProductsGetListDocument } from "@gql/graphql"

export const getProducts = async (pageNumber: number, orderBy?: string) => {
	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE
	const orderByOption = getOrderByOption(orderBy)

	const { products } = await executeGraphql(ProductsGetListDocument, {
		productsPerPage: PRODUCTS_PER_PAGE,
		offset,
		orderBy: orderByOption,
	})

	return products
}

const getOrderByOption = (orderBy: string | undefined): ProductOrderByInput | undefined => {
	switch (orderBy) {
		case "priceAsc":
			return "price_ASC"
		case "priceDesc":
			return "price_DESC"
		case "ratingAsc":
			return "averageRating_ASC"
		case "ratingDesc":
			return "averageRating_DESC"
		default:
			return undefined
	}
}
