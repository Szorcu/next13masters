import { notFound } from "next/navigation"
import { getCollections } from "@api/calls/getCollections"
import { CollectionList } from "@ui/organisms/CollectionList"

const Home = async () => {
	const collections = await getCollections()

	if (collections.length === 0) {
		notFound()
	}

	return (
		<section>
			<CollectionList {...{ collections }} />
		</section>
	)
}

export default Home
