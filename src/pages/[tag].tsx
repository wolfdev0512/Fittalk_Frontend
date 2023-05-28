// next
import React, { useEffect } from "react";
import type { NextPage } from "next";
// component
import { WithContainer } from "components/Container";
// redux
import { useAppDispatch } from "redux/store";
import { setTags } from "redux/slices/tags";
// api
import contentClient from "api/contentClient";
import { BlogQuery } from "graphqls/blog";
import { initializeApollo } from "api/configureClient";
// hook
import { useRouter } from "hooks";
// type
import { TagsType } from "types/model/category/interface";
import { BlogItemModel } from "types/model/blog";
// views
import {
	CategoryView,
	CategorySearchView,
	BlogByTagView,
	MainBannerViewWithData,
} from "views/Home";

import { Seo } from "components/Seo";

// ------------------------------------------------------
type TagPage = {
	tags: TagsType;
	recentByTag: any;
};

const TagPage: NextPage<TagPage> = ({ tags, recentByTag }) => {
	const { router } = useRouter();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setTags(tags));
	}, [dispatch]);

	// when tag is invalid
	if (recentByTag[`${router.query.tag?.toString() ?? ""}`] === undefined) {
		router.push("/");
		return <></>;
	}

	const data = new BlogItemModel(
		recentByTag[`${router.query.tag?.toString() ?? ""}`].items[0]
	);

	return (
		<>
			<Seo
				title={data.getFullTitle()}
				description={data.getDescriptionAsText()}
				image={data.getBlogImage()}
			/>
			<MainBannerViewWithData param={data} />
			<WithContainer SectionView={CategoryView} recentByTag={recentByTag} />
			<WithContainer
				SectionView={CategorySearchView}
				className="categorySearchView"
			/>
			<WithContainer cColor="white" SectionView={BlogByTagView} />
		</>
	);
};
export const getServerSideProps = async (context) => {
	const apolloClient = initializeApollo();
	const tags = await contentClient.getTags().then((res) => res);
	const tagList: Array<string> = [];
	tagList.push(context.params.tag);
	await apolloClient.query({
		query: BlogQuery.GET_BLOG_BY_TAG,
		variables: {
			tag: tagList,
			limit: 30,
		},
	});
	const recentByTag = await apolloClient.query({
		query: BlogQuery.getRecentByTag(tags.items),
	});

	return {
		props: {
			tags,
			recentByTag: recentByTag.data,
			initialApolloState: apolloClient.cache.extract(),
		},
	};
};

export default TagPage;
