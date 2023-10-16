"use client"

import { Minus, Plus } from "lucide-react"
import React, { experimental_useOptimistic as useOptimistic } from "react"
import { QuantityButton } from "./QuantityButton"
import { changeOrderItemQuantityAction } from "@api/actions/changeOrderItemQuantityAction"

type OrderProductItemQuantityProps = {
	itemId: string
	quantity: number
}

export const OrderProductItemQuantity = ({ itemId, quantity }: OrderProductItemQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	)

	const disableDecreaseBtn = optimisticQuantity <= 1

	const handleQuantityIncrease = async () => {
		setOptimisticQuantity(optimisticQuantity + 1)
		await changeOrderItemQuantityAction(itemId, optimisticQuantity + 1)
	}

	const handleQuantityDecrease = async () => {
		setOptimisticQuantity(optimisticQuantity - 1)
		await changeOrderItemQuantityAction(itemId, optimisticQuantity - 1)
	}

	return (
		<form className="flex items-center gap-6">
			<QuantityButton
				isDisabled={disableDecreaseBtn}
				dataTestId="decrement"
				formAction={handleQuantityDecrease}
			>
				<Minus />
			</QuantityButton>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<QuantityButton dataTestId="increment" formAction={handleQuantityIncrease}>
				<Plus />
			</QuantityButton>
		</form>
	)
}
