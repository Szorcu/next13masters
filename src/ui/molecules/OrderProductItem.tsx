import NextImage from "next/image"
import { type ProductListItemFragment, type OrderItemFragment } from "@gql/graphql"
import { getFormattedPrice } from "@utils/getFormattedPrice"
import { OrderProductItemQuantity } from "@ui/atoms/OrderProductItemQuantity"

type OrderProductItemProps = {
	id: OrderItemFragment["id"]
	quantity: OrderItemFragment["quantity"]
	product: ProductListItemFragment
}

export const OrderProductItem = ({ id, quantity, product }: OrderProductItemProps) => {
	const { name, images, categories, price } = product
	const productImageUrl = images[0].url
	const productCategory = categories[0].name

	return (
		<li
			className="grid items-center gap-4 border-b px-2 py-4"
			style={{ gridTemplateColumns: "auto 1fr auto auto" }}
		>
			<NextImage src={productImageUrl} alt={name} width={150} height={150} />
			<div>
				<p className="text-lg font-bold text-gray-700">{name}</p>
				<p className="text-gray-400">{productCategory}</p>
			</div>
			<OrderProductItemQuantity {...{ quantity }} itemId={id} />
			<p>{getFormattedPrice(price)}</p>
		</li>
	)
}
