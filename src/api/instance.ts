import axios from "axios"

const BASE_API_URL = "https://naszsklep-api.vercel.app/api/"

export const basicInstance = axios.create({
	baseURL: BASE_API_URL,
})
