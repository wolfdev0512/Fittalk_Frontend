import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { BlogQuery } from "graphqls/blog";
import { BlogBrief } from "widgets/BlogItem";
import { BlogItemInterface } from "types/model/blog/interface";

import { LastBlogsWrapper } from "./LastBlogs.style";

// -----------------------------------------------------------
const LastBlogs = () => {
	const { data } = useQuery(BlogQuery.GET_BANNER_BLOG);

	const recentBlogs: Array<BlogItemInterface> | undefined = useMemo(() => {
		const mostRecentBlog = data?.blogsModelCollection?.items;
		return mostRecentBlog ? mostRecentBlog.slice(1, 4) : undefined;
	}, [data]);

	return (
		<LastBlogsWrapper>
			{recentBlogs?.map((item, index) => (
				<BlogBrief
					blog={item}
					className={`blog_breif${index}`}
					key={`blog_breif${index}`}
				></BlogBrief>
			))}
		</LastBlogsWrapper>
	);
};

export default LastBlogs;
