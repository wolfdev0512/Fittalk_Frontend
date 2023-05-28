// api
import shopifyClient from "api/shopifyClient";
import contentManager from "api/contentManager";
// utils
import { getID } from "utils/helper-string";
import { createAssets } from "utils/helper-contentful";
/**
 * @public
 * @param cursor the product's cursor to start getting data
 * @description get the 120 products after cusor from shopify
 */
export const getProductShopify = async (curCursor) => {
  const afterCursor = curCursor ? `after:"${curCursor}"` : "";
  const products = await shopifyClient.graphql(
    `{
        products(first: 120, ${afterCursor}, reverse: true) {
          edges {
            node {
              id
              title
              handle
              vendor
              productType
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    
                  }
                }
              }
              variants(first:1) {
                edges {
                    node {
                      id
                      title
                      sku
                      displayName
                    }
                  }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }`
  );
  return products;
};

/**
 * @public
 * @param shopifyData the products data from shopify
 * @description create products to contentful
 */
export const createProductContentful = async (shopifyData) => {
  if (!shopifyData) {
    return "We don't have any product data";
  }
  for (const item of shopifyData.products.edges) {
    await createItem(item);
  }

  return "Success Added";
};

/**
 * @private
 * @param item
 * @description create the contentful product with shopify data model
 */

const createItem = async (item) => {
  // Check that product is exist
  const isExist = await contentManager.then((environment) => {
    return environment.getEntries({
      "fields.productId": getID(item.node.id, "Product"),
      content_type: "product",
    });
  });
  if (isExist?.total != 0) {
    return "";
  }
  // prepare data
  const { id, title, sku, displayName } = item?.node?.variants?.edges[0]
    ?.node ?? {
    id: "",
    title: "",
    sku: "",
    displayName: "",
  };
  // create assets for base_image
  const baseImageData = await createAssets(
    item.node.images?.edges[0]?.node?.originalSrc ?? "",
    item.node.title
  );
  const data = {
    title: { "en-US": item.node.title },
    url: { "en-US": item.node.handle },
    brand: { "en-US": item.node.vendor },
    category: { "en-US": item.node.productType },
    ...(baseImageData
      ? {
          baseImage: {
            "en-US": baseImageData,
          },
        }
      : {}),
    sku: { "en-US": sku },
    productId: { "en-US": getID(item.node.id, "Product") },
    variantId: { "en-US": getID(id, "ProductVariant") },
    variantTitle: { "en-US": title },
    displayName: { "en-US": displayName },
  };
  // add product to contentful
  await addProductContentful(data);
};

/**
 * @private
 * @param fields product' data to create
 * @description add product in contentful
 */
const addProductContentful = async (fields) => {
  await contentManager
    .then(async (environment) => {
      return environment
        .createEntry("product", {
          fields,
        })
        .then(async (entry) => await entry.publish());
    })
    .then((entry) => {
      if (entry) return "Added";
    })
    .catch(console.error);
};
