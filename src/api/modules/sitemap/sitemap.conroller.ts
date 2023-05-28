// api
import contentClient from "api/contentClient";
import { initializeApollo } from "api/configureClient";
import { BlogQuery } from "graphqls/blog";

//types
import { BlogItemModel } from "types/model/blog";

// -----------------------------------------------------

export const getSitemap = async () => {
  const apolloClient = initializeApollo();

  // --- tags --- //
  const tagsResponse = await contentClient.getTags().then((res) => res);
  const tags = tagsResponse.items.map((item) => "/" + item.sys.id);
  // --- slugs --- //
  const slugs: Array<string> = [];
  for (let i = 0; i < tagsResponse.total; i++) {
    const element = tagsResponse.items[i].sys.id;
    const tagList: Array<string> = [];
    tagList.push(element);

    const { data } = await apolloClient.query({
      query: BlogQuery.GET_BLOG_BY_TAG,
      variables: {
        tag: tagList,
      },
    });

    const blogsForTag = data.blogsModelCollection.items.map((item) => {
      const blogItem = new BlogItemModel(item);
      return "/" + blogItem.getTagId() + "/" + blogItem.getSlug();
    });
    slugs.push(...blogsForTag);
  }

  return [...tags, ...slugs];
  //   return products;
};
