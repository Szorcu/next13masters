import { notFound } from "next/navigation"
import { ProductList } from "@ui/organisms/ProductList"
import { ProductsPagination } from "@ui/organisms/ProductsPagination"
import { getProducts } from "@api/calls/getProducts"

type ProductsPageProps = {
	params: {
		pageNumber: string
	}
}

export const generateStaticParams = () => {
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }]
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
	const { pageNumber } = params

	const products = await getProducts(parseInt(pageNumber))

	if (products.length === 0) {
		notFound()
	}

	return (
		<section>
			<ProductList {...{ products }} />
			<ProductsPagination />
		</section>
	)
}

export default ProductsPage
