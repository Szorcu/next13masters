import { notFound } from "next/navigation"
import { ProductList } from "@ui/organisms/ProductList"
import { ProductsPagination } from "@ui/organisms/ProductsPagination"
import { getProducts } from "@api/calls/getProducts"
import { getProductsAllCount } from "@api/calls/getProductsAllCount"

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
	const allProductsCount = await getProductsAllCount()

	if (products.length === 0) {
		notFound()
	}

	return (
		<main className="flex flex-1 flex-col gap-8">
			<header>
				<h1 className="text-xl font-bold">All products</h1>
			</header>

			<section className="flex flex-1 flex-col justify-between gap-6">
				<ProductList {...{ products }} />
				<ProductsPagination productsCount={allProductsCount} pathBase="products" />
			</section>
		</main>
	)
}

export default ProductsPage
