import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		qualities: [60, 75],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.tina.io",
			},
		],
	},
};

export default nextConfig;
