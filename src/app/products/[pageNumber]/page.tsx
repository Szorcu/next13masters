import { ProductList } from "@/ui/organisms/ProductList"
import { ProductsPagination } from "@/ui/organisms/ProductsPagination"
import { getProducts } from "@/api/getProducts"

type ProductsPaginatedPageProps = {
	params: {
		pageNumber: string
	}
}

export const generateStaticParams = () => {
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }]
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
