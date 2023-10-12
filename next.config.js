/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: true,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
