import React from "react"
import { getOrderFromCookies } from "@api/calls/getOrderFromCookies"
import { OrderProductList } from "@ui/organisms/OrderProductList"

const CartPage = async () => {
	const order = await getOrderFromCookies()

	const orderProducts = order?.orderItems

	return (
		<main>
			<h1 className="mb-4 text-2xl font-bold text-gray-700">Your shopping cart</h1>

			<OrderProductList orderProducts={orderProducts ?? []} />
		</main>
	)
}

export default CartPage
