import React from "react";
import { getSitemap } from "api/modules/sitemap/sitemap.conroller";

// Default export to prevent next.js errors
const SitemapXML: React.FC = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	const baseUrl = {
		development: "http://localhost:3000",
		production: "https://www.nutritionwarehouse.com.au/a/fittalk",
	}[process.env.NODE_ENV];

	const data = await getSitemap();

	const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${data
	.map((item) => {
		return `
<url>
<loc>${baseUrl + item}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>1.0</priority>
</url>
`;
	})
	.join("")}
</urlset>
`;

	/**Set Cache Control in vercel @see https://vercel.com/docs/edge-network/caching#stale-while-revalidate */
	res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemapContent);

	res.end();

	// Empty since we don't render anything
	return {
		props: {},
	};
};

export default SitemapXML;
