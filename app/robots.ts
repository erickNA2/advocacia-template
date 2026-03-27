import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
			{
				userAgent: "AhrefsBot",
				disallow: "/",
			},
			{
				userAgent: "MJ12bot",
				disallow: "/",
			},
			{
				userAgent: "DotBot",
				disallow: "/",
			},
		],
		sitemap: "https://advocacia-criminal.com.br/sitemap.xml",
	};
}
