// api
import {
	getProductShopify,
	createProductContentful,
} from "api/modules/product/product.controller";

async function handler(req, res) {
	let cursor = "";
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const products = await getProductShopify(cursor);
		await createProductContentful(products);
		if (!products.products.pageInfo.hasNextPage) {
			break;
		}
		cursor = products.products.edges[119].cursor;
	}
	return res.json({ success: true });
}

export default handler;
