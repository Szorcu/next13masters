import { executeGraphql } from "@api/executeGraphql"
import { OrderGetByIdDocument } from "@gql/graphql"

export const getOrderById = async (orderId: string) => {
	const { order } = await executeGraphql(OrderGetByIdDocument, {
		id: orderId,
	})

	return order ?? null
}
