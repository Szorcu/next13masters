import { notFound } from "next/navigation"
import { ProductList } from "@ui/organisms/ProductList"
import { ProductsPagination } from "@ui/organisms/ProductsPagination"
import { getProducts } from "@api/calls/getProducts"
import { getProductsAllCount } from "@api/calls/getProductsAllCount"
import { ProductsSortSelect } from "@ui/molecules/ProductsSortSelect"

type ProductsPageProps = {
	params: {
		pageNumber: string
	}
	searchParams: {
		sortBy?: string
	}
}

export const generateStaticParams = () => {
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }]
}

const ProductsPage = async ({ params, searchParams }: ProductsPageProps) => {
	const { pageNumber } = params
	const { sortBy } = searchParams

	const products = await getProducts(parseInt(pageNumber), sortBy)
	const allProductsCount = await getProductsAllCount()

	if (products.length === 0) {
		notFound()
	}

	return (
		<main className="flex flex-1 flex-col gap-8">
			<header className="flex justify-between">
				<h1 className="text-xl font-bold">All products</h1>
				<ProductsSortSelect />
			</header>

			<section className="flex flex-1 flex-col justify-between gap-6">
				<ProductList {...{ products }} />
				<ProductsPagination productsCount={allProductsCount} pathBase="products" />
			</section>
		</main>
	)
}

export default ProductsPage
