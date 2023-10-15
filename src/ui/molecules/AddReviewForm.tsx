import React from "react"
import { addReview } from "@api/calls/addReview"

export const AddReviewForm = () => {
	const addReviewAction = async (formData: FormData) => {
		"use server"

		const reviewData = {
			headline: formData.get("headline") as string,
			content: formData.get("content") as string,
			rating: parseInt(formData.get("rating") as string),
			name: formData.get("name") as string,
			email: formData.get("email") as string,
		}

		await addReview(reviewData)
	}

	return (
		<form className="flex flex-col gap-2" data-testid="add-review-form" action={addReviewAction}>
			<input type="text" required name="headline" placeholder="Review title" />
			<textarea name="content" placeholder="Review content" />
			<input type="number" name="rating" placeholder="Rating" />
			<input type="text" name="name" placeholder="Username" />
			<input type="email" name="email" placeholder="Email" />

			<button className="bg-yellow-400 px-4 py-2 font-bold text-white" type="submit">
				Submit review
			</button>
		</form>
	)
}
