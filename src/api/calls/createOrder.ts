import { OrderCreateDocument } from "@gql/graphql"
import { executeGraphql } from "@api/executeGraphql"

export const createOrder = async () => {
	const { createOrder } = await executeGraphql(OrderCreateDocument)

	return createOrder ?? null
}
