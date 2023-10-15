import { addReview } from "@api/calls/addReview"

export const addReviewAction = async (formData: FormData) => {
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
