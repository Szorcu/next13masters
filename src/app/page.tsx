import { getCollections } from "@api/calls/getCollections"
import { CollectionList } from "@ui/organisms/CollectionList"
import { getProducts } from "@api/calls/getProducts"
import { ProductList } from "@ui/organisms/ProductList"

const Home = async () => {
	const collections = await getCollections()
	const products = await getProducts(1)

	return (
		<main className="flex flex-col gap-32">
			<section>
				<CollectionList {...{ collections }} />
			</section>

			<section className="flex flex-col gap-6">
				<h1 className="text-xl font-bold text-gray-700">Featured products</h1>
				<ProductList {...{ products }} />
			</section>
		</main>
	)
}

export default Home
