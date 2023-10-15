import { cookies } from "next/headers"
import { getOrderById } from "./getOrderById"
import { ORDER_ID_COOKIE } from "@/constants/cookies"

export const getOrderFromCookies = async () => {
	const orderId = cookies().get(ORDER_ID_COOKIE)?.value

	if (orderId) {
		const order = await getOrderById(orderId)

		if (order) {
			return order ?? null
		}
	}

	return null
}
