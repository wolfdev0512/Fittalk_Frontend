// next
import React from "react";
import type { NextPage } from "next";
// component
import { Seo } from "components/Seo";
import { WithContainer } from "components/Container";
// hook
import { useRouter } from "hooks";
// api
import { BlogQuery } from "graphqls/blog";
import { initializeApollo } from "api/configureClient";
// helper
import { isEmpty } from "utils/helper-validation";
// views
import { BlogContentView, FitTalkView, RelatedProductView } from "views/Blog";
import { MainBannerViewWithData as MainBannerView } from "views/Home";
// type
import { BlogItemInterface } from "types/model/blog/interface";
import { BlogItemModel } from "types/model/blog";

// -----------------------------------------------------------

const Blog: NextPage<{ blog: BlogItemInterface }> = ({ blog }) => {
	const { move } = useRouter();
	if (isEmpty(blog)) {
		move("/404", {}, true);
		return <></>;
	}

	const data = new BlogItemModel(blog);
	return (
		<>
			<Seo
				title={data.getFullTitle()}
				description={data.getDescriptionAsText() + ""}
				image={data.getBlogImage()}
			/>
			<WithContainer mode="none" SectionView={MainBannerView} param={data} />
			<WithContainer SectionView={BlogContentView} param={data} />
			<WithContainer SectionView={RelatedProductView} />
			<WithContainer cColor="#F8F9FA" SectionView={FitTalkView} />
		</>
	);
};
export default Blog;

export const getServerSideProps = async (context) => {
	const slug = context.params.slug;
	const tagList: Array<string> = [];
	tagList.push(context.params.tag);
	const apolloClient = initializeApollo();
	//Fetch A Blog with current Slug and Category
	const { data } = await apolloClient.query({
		query: BlogQuery.GET_BLOG_BY_SLUG,
		variables: {
			slug: slug,
			category: tagList,
		},
	});
	//Fetch BLogs Data in current Category
	await apolloClient.query({
		query: BlogQuery.GET_BLOG_BY_TAG,
		variables: {
			tag: tagList,
		},
	});

	return {
		props: {
			blog: data.blogsModelCollection?.items[0] ?? null,
			initialApolloState: apolloClient.cache.extract(),
		},
	};
};
