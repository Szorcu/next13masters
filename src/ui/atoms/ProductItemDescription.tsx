import { getFormattedPrice } from "@/utils/getFormattedPrice"

type ProductItemDescriptionProps = {
	title: string
	category: string
	price: number
}

export const ProductItemDescription = ({ title, category, price }: ProductItemDescriptionProps) => {
	return (
		<div className=" px-4 py-2">
			<div className="flex justify-between font-bold text-gray-800">
				<h3>{title}</h3>
				<p>{getFormattedPrice(price)}</p>
			</div>
			<p className="text-gray-400">{category}</p>
		</div>
	)
}
