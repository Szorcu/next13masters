import { PRODUCTS_PER_PAGE } from "@/constants/common"
import { executeGraphql } from "@api/executeGraphql"
import { ProductsGetByCategorySlugDocument } from "@gql/graphql"

export const getProductsByCategorySlug = async (slug: string, pageNumber: number) => {
	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE

	const { products } = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug,
		productsPerPage: PRODUCTS_PER_PAGE,
		offset,
	})

	return products
}
