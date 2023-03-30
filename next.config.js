/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

//module.exports = nextConfig;
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'forell-lab.amzb.securityserve.com',
			},
		],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};
