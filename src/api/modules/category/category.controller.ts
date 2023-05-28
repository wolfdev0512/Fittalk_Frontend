// api
import shopifyClient from "api/shopifyClient";
import contentManager from "api/contentManager";
// utils
import { getID } from "utils/helper-string";
import { createAssets } from "utils/helper-contentful";

/**
 * @public
 * @param cursor the product's cursor to start getting data
 * @description get the 120 category after cusor from shopify
 */
export const getCategoryShopify = async (curCursor) => {
  const afterCursor = curCursor ? `after:"${curCursor}"` : "";
  const products = await shopifyClient.graphql(
    `{
        collections(first: 120, ${afterCursor},  reverse: true) {
          edges {
            node {
              id
              title
              handle
              image {
                originalSrc
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      `
  );
  return products;
};

/**
 * @public
 * @param shopifyData the category data from shopify
 * @description create category to contentful
 */
export const createCategoryContentful = async (shopifyData) => {
  if (!shopifyData) {
    return "We don't have any collections data";
  }
  for (const item of shopifyData.collections.edges) {
    await createItem(item);
  }
  return "Success Added";
};

/**
 * @private
 * @param item
 * @description create the contentful category with shopify data model
 */
const addCategoryContentful = async (fields) => {
  contentManager
    .then(async (environment) => {
      const isExist = await environment.getEntries({
        "fields.categoryId": fields.categoryId["en-US"],
        content_type: "category",
      });
      if (isExist?.total == 0) {
        return environment
          .createEntry("category", {
            fields,
          })
          .then(async (entry) => await entry.publish());
      } else {
        return "";
      }
    })
    .then((entry) => {
      if (entry) return "Added";
    })
    .catch(console.error);
};

/**
 * @private
 * @param fields category' data to create
 * @description add category in contentful
 */
const createItem = async (item) => {
  const collectionImageData = await createAssets(
    item.node.image?.originalSrc ?? "",
    item.node.title
  );

  const data = {
    categoryId: { "en-US": getID(item.node.id, "Collection") },
    title: { "en-US": item.node.title },
    handle: { "en-US": item.node.handle },
    ...(collectionImageData ? { image: { "en-US": collectionImageData } } : {}),
  };
  await addCategoryContentful(data);
};
