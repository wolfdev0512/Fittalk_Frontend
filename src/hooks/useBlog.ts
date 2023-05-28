import { useRouter } from "hooks";
import { BlogQuery } from "graphqls/blog";
import { useQuery } from "@apollo/client";

// -----------------------------------------------------------------

const useBlog = () => {
  const { router } = useRouter();

  const fetchBlogsByTag = (limit = 5) => {
    const tags: Array<string> = [];
    tags.push(router.query.tag?.toString() ?? "");
    const { data } = useQuery(BlogQuery.GET_BLOG_BY_TAG, {
      variables: {
        tag: tags,
        limit,
      },
    });
    return data?.blogsModelCollection?.items ?? [];
  };

  return {
    fetchBlogsByTag,
  };
};
export default useBlog;
