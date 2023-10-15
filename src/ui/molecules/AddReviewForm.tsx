"use client"

import React, { useRef } from "react"
import clsx from "clsx"

type AddReviewFormProps = {
	className?: string

	action: (formData: FormData) => Promise<void>
}

export const AddReviewForm = ({ className, action }: AddReviewFormProps) => {
	const formRef = useRef<HTMLFormElement>(null)

	const handeleFormSubmit = async (formData: FormData) => {
		await action(formData)

		formRef.current?.reset()
	}

	return (
		<form
			ref={formRef}
			className={clsx("flex flex-col gap-2", className)}
			data-testid="add-review-form"
			action={handeleFormSubmit}
		>
			<input type="text" required name="headline" placeholder="Review title" />
			<textarea name="content" placeholder="Review content" />
			<input type="number" name="rating" min={1} max={5} placeholder="Rating" />
			<input type="text" name="name" placeholder="Username" />
			<input type="email" name="email" placeholder="Email" />

			<button className="bg-yellow-400 px-4 py-2 font-bold text-white" type="submit">
				Submit review
			</button>
		</form>
	)
}
