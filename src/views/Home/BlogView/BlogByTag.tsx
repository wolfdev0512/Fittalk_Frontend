/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
// feature
import BlogViewItem from "widgets/BlogView";
// hook
import { useRouter } from "hooks";
import useBlog from "hooks/useBlog";
// redux
import { RootState, useAppSelector } from "redux/store";
// styled component
import { BlogViewWrapper } from "./BlogView.style";
// ----------------------------------------------------

const BlogView = () => {
	const { router } = useRouter();
	const { taglist } = useAppSelector((state: RootState) => state.tags);

	const { fetchBlogsByTag } = useBlog();

	// Fetch 30 Blogs by Tag
	const blogs = fetchBlogsByTag(30);
	return (
		<BlogViewWrapper>
			<BlogViewItem
				category={
					taglist.find(
						(item) => item.sys.id === router.query.tag?.toString() ?? ""
					)?.name ?? ""
				}
				categoryId={router.query.tag?.toString() ?? ""}
				categoryData={blogs}
				mode="all"
			/>
		</BlogViewWrapper>
	);
};

export default BlogView;
// @ts-nocheck
