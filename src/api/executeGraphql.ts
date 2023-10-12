import axios from "axios"
import { type TypedDocumentString } from "@/gql/graphql"

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined }

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined")
	}

	const axiosResponse = await axios.post(process.env.GRAPHQL_URL, {
		query,
		variables,
	})
	const graphqlResponse = axiosResponse.data as GraphQLResponse<TResult>

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		})
	}

	return graphqlResponse.data
}
