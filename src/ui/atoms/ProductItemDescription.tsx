import { getFormattedPrice } from "@/utils/getFormattedPrice"

type ProductItemDescriptionProps = {
	name: string
	category: string
	price: number
}

export const ProductItemDescription = ({ name, category, price }: ProductItemDescriptionProps) => {
	return (
		<div className=" px-4 py-2">
			<div className="flex justify-between font-bold text-gray-800">
				<h3>{name}</h3>
				<p>{getFormattedPrice(price)}</p>
			</div>
			<p className="text-gray-400">{category}</p>
		</div>
	)
}
