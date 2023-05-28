/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useRouter } from "next/router";
// component
import { Text } from "components/Text";
// apollo
import { useQuery } from "@apollo/client";
import { BlogQuery } from "graphqls/blog";
// feature
import BlogViewItem from "widgets/BlogView";
// styled component
import { BlogViewWrapper } from "./BlogBySearch.style";
// utils
import { blogLoadingData } from "utils/constData";
// ----------------------------------------------------

const BlogView: React.FC = () => {
	const { query } = useRouter();
	if (query.q == undefined) {
		return <></>;
	}

	const { loading, error, data } = useQuery(BlogQuery.SEARCH_BLOG_BY_PARAM, {
		variables: {
			search: query?.q ?? "",
		},
	});

	if (loading) {
		return (
			<BlogViewWrapper>
				{/* @ts-ignore */}
				{blogLoadingData.searchData.map((item, index) =>
					item.categoryData?.length ?? 0 > 0 ? (
						<BlogViewItem
							category={item.category}
							categoryId={item.categoryId}
							categoryData={item.categoryData}
							key={`blogViewItem_${index}`}
							mode="all"
							loading={true}
						/>
					) : (
						<React.Fragment key={`blogViewItem_${index}`}></React.Fragment>
					)
				)}
			</BlogViewWrapper>
		);
	}

	if (error) return <>{`Error! ${error.message}`}</>;

	return (
		<BlogViewWrapper>
			{data?.blogsModelCollection?.items <= 0 ? (
				<Text fontSize={18} color="gray.200">
					No results found.
				</Text>
			) : (
				<BlogViewItem
					category={""}
					categoryId={""}
					categoryData={data?.blogsModelCollection?.items}
					mode="all"
				/>
			)}
		</BlogViewWrapper>
	);
};

export default BlogView;
