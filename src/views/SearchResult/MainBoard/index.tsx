import React from "react";
// component
import { PageBreadcrumbs } from "components/Breadcrumbs";
import { Text } from "components/Text";
// styled component
import { BreadcrumbsWrapper } from "./MainBoard.style";
import { useRouter } from "next/router";
// --------------------------------------------------------
const MainBoardView = () => {
	const { query } = useRouter();

	const breadcurmbsData = [
		{ title: "home", link: "" },
		{ title: `Search`, link: "" },
	];

	return (
		<div>
			<BreadcrumbsWrapper>
				<PageBreadcrumbs items={breadcurmbsData} />
			</BreadcrumbsWrapper>
			<Text as="h1" fontSize={32} fontFamily="changa" fontWeight={600}>
				Search results for "{query?.q ?? ""}"
			</Text>
		</div>
	);
};

export default MainBoardView;
