import React from "react"

type ProductItemCoverImgProps = {
	src: string
	alt: string
}

export const ProductItemCoverImg = ({ src, alt }: ProductItemCoverImgProps) => {
	return (
		<div className="overflow-hidden">
			<img className="w-full transition hover:scale-105" src={src} alt={alt} />
		</div>
	)
}
