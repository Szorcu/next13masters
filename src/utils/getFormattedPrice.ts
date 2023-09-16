export const getFormattedPrice = (price: number) => {
	const formatter = new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
		minimumFractionDigits: 2,
	})

	return formatter.format(price / 100)
}
