import { type OrderItemFragment } from "@gql/graphql"
import { OrderProductItem } from "@ui/molecules/OrderProductItem"

type OrderProductList = {
	orderProducts: OrderItemFragment[]
}

export const OrderProductList = ({ orderProducts }: OrderProductList) => {
	return (
		<ul>
			{orderProducts.map(({ id, product, quantity }) => {
				if (!product) {
					return
				}

				return <OrderProductItem key={id} {...{ product, quantity, id }} />
			})}
		</ul>
	)
}
