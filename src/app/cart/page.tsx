import React from "react"
import { getOrderFromCookies } from "@api/calls/getOrderFromCookies"

const CartPage = async () => {
	const order = await getOrderFromCookies()

	return (
		<main>
			<h1 className="text-2xl font-bold text-gray-700">Your shopping cart</h1>

			{order?.orderItems.map(({ product }) => {
				return (
					product && (
						<div key={product.id}>
							<p>{product.name}</p>
						</div>
					)
				)
			})}
		</main>
	)
}

export default CartPage
