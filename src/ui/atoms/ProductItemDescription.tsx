import { getFormattedPrice } from "@/utils/getFormattedPrice"

type ProductItemDescriptionProps = {
	name: string
	category: string
	price: number
	averageRating: number
}

export const ProductItemDescription = ({
	name,
	category,
	price,
	averageRating,
}: ProductItemDescriptionProps) => {
	return (
		<div className=" px-4 py-2">
			<div className="flex justify-between font-bold text-gray-800">
				<h3>{name}</h3>
				<p data-testid="product-price">{getFormattedPrice(price)}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-gray-400">{category}</p>
				<p className="text-yellow-400" data-testid="product-rating">
					{averageRating}
				</p>
			</div>
		</div>
	)
}
