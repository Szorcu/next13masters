"use server"

import { executeGraphql } from "@api/executeGraphql"
import { OrderChangeItemQuantityDocument } from "@gql/graphql"

export const changeOrderItemQuantityAction = async (itemId: string, quantity: number) => {
	await executeGraphql(OrderChangeItemQuantityDocument, {
		quantity,
		itemId,
	})
}
