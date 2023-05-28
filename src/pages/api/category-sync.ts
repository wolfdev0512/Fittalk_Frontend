// api
import {
	getCategoryShopify,
	createCategoryContentful,
} from "api/modules/category/category.controller";

async function handler(req, res) {
	let cursor = "";
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const categories = await getCategoryShopify(cursor);
		await createCategoryContentful(categories);
		if (!categories.collections.pageInfo.hasNextPage) {
			break;
		}
		cursor = categories.collections.edges[119].cursor;
	}
	return res.json({ success: true });
}

export default handler;
