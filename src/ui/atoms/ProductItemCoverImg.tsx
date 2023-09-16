import React from "react"

type ProductItemCoverImgProps = {
	src: string
	alt: string
}

export const ProductItemCoverImg = ({ src, alt }: ProductItemCoverImgProps) => {
	return (
		<div className="bg-slate-50 p-4">
			<img className="" src={src} alt={alt} />
		</div>
	)
}
