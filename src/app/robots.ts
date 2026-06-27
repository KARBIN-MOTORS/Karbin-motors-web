import type { MetadataRoute } from "next";
import { SITE_URL } from "@/modules/shared/constants/site.const";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin/index.html"],
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
