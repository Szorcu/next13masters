import { PRODUCTS_PER_PAGE } from "@/constants/common"
import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetListDocument } from "@gql/graphql"

export const getProducts = async (pageNumber: number) => {
	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE

	const { products } = await executeGraphql(ProductsGetListDocument, {
		productsPerPage: PRODUCTS_PER_PAGE,
		offset,
	})

	return products
}
