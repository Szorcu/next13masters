import React, { type ReactNode } from "react"

type QuantityButtonProps = {
	children: ReactNode

	isDisabled?: boolean
	dataTestId?: string

	formAction: (formData: FormData) => {}
}

export const QuantityButton = ({
	children,
	isDisabled,
	dataTestId,
	formAction,
}: QuantityButtonProps) => {
	return (
		<button
			className="text-gray-500 disabled:text-gray-300"
			type="submit"
			disabled={isDisabled}
			data-testid={dataTestId}
			formAction={formAction}
		>
			{children}
		</button>
	)
}
