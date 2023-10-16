import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { changeOrderItemQuantityAction } from "./changeOrderItemQuantityAction"
import { ORDER_ID_COOKIE } from "@/constants/cookies"
import { addOrderItem } from "@api/calls/addOrderItem"
import { createOrder } from "@api/calls/createOrder"
import { getOrderFromCookies } from "@api/calls/getOrderFromCookies"

export const addProductToCartAction = async (formData: FormData) => {
	"use server"

	const productId = formData.get("productId") as string

	const { id: orderId, orderItems } = await getOrCreateOrder()

	const orderItem = orderItems.find((item) => item.product?.id === productId)

	if (orderItem) {
		await changeOrderItemQuantityAction(orderItem.id, orderItem.quantity + 1)
	} else {
		await addOrderItem(orderId, productId)
	}

	revalidatePath("/cart")
}

const getOrCreateOrder = async () => {
	const order = await getOrderFromCookies()

	if (order) {
		return order
	}

	const newOrder = await createOrder()

	if (!newOrder) {
		throw new Error("Failed to create an order")
	}

	cookies().set(ORDER_ID_COOKIE, newOrder.id)

	return newOrder
}
