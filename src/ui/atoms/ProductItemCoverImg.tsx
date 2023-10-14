import React from "react"

type ProductItemCoverImgProps = {
	src: string
	alt: string
}

export const ProductItemCoverImg = ({ src, alt }: ProductItemCoverImgProps) => {
	return (
		<div className="group flex h-96 items-center justify-center overflow-hidden p-4">
			<img
				className="h-max max-h-full max-w-full transition group-hover:scale-105"
				src={src}
				alt={alt}
			/>
		</div>
	)
}
