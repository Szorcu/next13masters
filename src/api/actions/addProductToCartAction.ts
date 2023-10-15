import { cookies } from "next/headers"
import { ORDER_ID_COOKIE } from "@/constants/cookies"
import { addProductToCart } from "@api/calls/addProductToOrder"
import { createOrder } from "@api/calls/createOrder"
import { getOrderFromCookies } from "@api/calls/getOrderFromCookies"

export const addProductToCartAction = async (formData: FormData) => {
	"use server"

	const productId = formData.get("productId") as string

	const { id: orderId } = await getOrCreateOrder()

	await addProductToCart(orderId, productId)
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
