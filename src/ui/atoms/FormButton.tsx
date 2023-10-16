"use client"

import React, { type ReactNode } from "react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

type FormButtonProps = {
	children: ReactNode

	dataTestId?: string

	formAction: (formData: FormData) => {}
}

export const FormButton = ({ children, dataTestId, formAction }: FormButtonProps) => {
	const formStatus = useFormStatus()

	return (
		<button
			className="mt-2 w-full max-w-20rem bg-yellow-400 px-6 py-2 text-white disabled:bg-yellow-100"
			disabled={formStatus.pending}
			data-testid={dataTestId}
			formAction={formAction}
		>
			{children}
		</button>
	)
}
