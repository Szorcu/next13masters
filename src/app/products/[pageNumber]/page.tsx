import { ProductList } from "@/ui/organisms/ProductList"
import { ProductsPagination } from "@/ui/organisms/ProductsPagination"
import { getProducts } from "@/api/getProducts"

type ProductsPaginatedPageProps = {
	params: {
		pageNumber: string
	}
}

const ProductsPaginatedPage = async ({ params }: ProductsPaginatedPageProps) => {
	const { pageNumber } = params

	const parsedPageNumber = parseInt(pageNumber)
	const products = await getProducts(parsedPageNumber)

	return (
		<section>
			<ProductList {...{ products }} />
			<ProductsPagination />
		</section>
	)
}

export default ProductsPaginatedPage
