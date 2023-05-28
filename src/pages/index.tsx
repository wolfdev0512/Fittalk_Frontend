// next
import React, { useEffect } from "react";
import type { NextPage } from "next";
// component
import { Page } from "components/Page";
import { WithContainer } from "components/Container";
// redux
import { setTags } from "redux/slices/tags";
// api
import contentClient from "api/contentClient";
import { BlogQuery } from "graphqls/blog";
import { initializeApollo } from "api/configureClient";
// type
import { TagsType } from "types/model/category/interface";
// views
import {
	TrustFactorView,
	VideoMainBannerView,
	BrandView,
	CategoryView,
	CategorySearchView,
	BlogView,
	LastBlogsView,
} from "views/Home";
// views
import { RelatedProductView } from "views/Blog";
import { useAppDispatch } from "redux/store";

// ------------------------------------------------------
type HomePage = {
	tags: TagsType;
	recentByTag: any;
};

const Home: NextPage<HomePage> = ({ tags, recentByTag }) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setTags(tags));
	}, [dispatch]);

	return (
		<Page name="home">
			<WithContainer SectionView={TrustFactorView} />
			<VideoMainBannerView />
			<WithContainer SectionView={LastBlogsView} />
			<WithContainer SectionView={CategoryView} recentByTag={recentByTag} />
			<WithContainer
				SectionView={CategorySearchView}
				className="categorySearchView"
			/>
			<WithContainer SectionView={BlogView} recentByTag={recentByTag} />
			<WithContainer SectionView={RelatedProductView} />
			<WithContainer SectionView={BrandView} />
		</Page>
	);
};

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

	// Getting Tag List
	const tags = await contentClient.getTags().then((res) => res);

	// Getting Banner Blogs
	await apolloClient.query({
		query: BlogQuery.GET_BANNER_BLOG,
	});

	// Getting 6 Blogs for each Tags
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
}
export default Home;
