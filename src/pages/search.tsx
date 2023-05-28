// next
import React from "react";
import type { NextPage } from "next";
// component
import { WithContainer } from "components/Container";
import { Page } from "components/Page";
// views
import { MainBoardView, BlogBySearchView } from "views/SearchResult";

// ------------------------------------------------------
const Search: NextPage = () => {
	return (
		<Page name="home">
			<WithContainer mWidth={1440} SectionView={MainBoardView} />
			<WithContainer mWidth={1440} SectionView={BlogBySearchView} />
		</Page>
	);
};

export default Search;
