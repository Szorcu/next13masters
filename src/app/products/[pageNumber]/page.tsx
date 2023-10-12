import { notFound } from "next/navigation"
import { ProductList } from "@ui/organisms/ProductList"
import { ProductsPagination } from "@ui/organisms/ProductsPagination"
import { getProducts } from "@api/calls/getProducts"

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

	const products = await getProducts()

	if (!products) {
		notFound()
	}

	return (
		<section>
			<ProductList {...{ products }} />
			<ProductsPagination />
		</section>
	)
}

export default ProductsPaginatedPage
