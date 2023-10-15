"use client"

import React, { type ReactNode } from "react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

type FormButtonProps = {
	children: ReactNode

	className?: string

	formAction: (formData: FormData) => {}
}

export const FormButton = ({ children, className, formAction }: FormButtonProps) => {
	const formStatus = useFormStatus()

	return (
		<button
			disabled={formStatus.pending}
			className="mt-2 w-full max-w-20rem bg-yellow-400 px-6 py-2 text-white disabled:bg-yellow-100"
			formAction={formAction}
		>
			{children}
		</button>
	)
}
