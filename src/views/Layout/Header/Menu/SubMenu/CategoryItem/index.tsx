import React, { FC } from "react";
// component
import { Container } from "components/Container";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";

import BannerItem, { BannerItemProps } from "./BannerItem";
// styled component
import { CategroyMenu, MenuGroup } from "./CategoryItem.style";

// images
import BannerImage1 from "assets/images/layout/NW_Category_Top-10-Categories.webp";
import BannerImage2 from "assets/images/layout/G_Core_LeanWhey_1kg_BananaBliss_200x200.webp";
import BannerImage3 from "assets/images/layout/nwh-gift-card-combo_200x200.webp";
// type
import { SubItemProps } from "../../types";

// ------------------------------------------------------

const bannerData: BannerItemProps[] = [
	{
		title: "View",
		desc: "TOP 10 CATEGORIES",
		imageSrc: BannerImage1,
		backColor: "linear-gradient(rgb(245, 245, 245), rgb(215, 215, 215) 100%)",
	},
	{
		title: "All",
		desc: "Protein",
		imageSrc: BannerImage2,
		backColor: "linear-gradient(rgb(248, 174, 6), rgb(248, 174, 6) 100%)",
	},
	{
		title: "Shop",
		desc: "Gift Cards",
		imageSrc: BannerImage3,
		backColor: "linear-gradient(rgb(30, 30, 30), rgb(30, 30, 30) 100%)",
	},
];
const CategoryItem: FC<SubItemProps> = ({ subData }) => {
	return (
		<CategroyMenu>
			<Container>
				<Row gap={20} justifyContent="space-between" padding="20px 0">
					<Row
						flexDirection="row"
						className="linkWrapper"
						gap={20}
						padding="10px 0 0 0"
					>
						{subData &&
							subData.map(({ title, url, children }, groupIndex) => (
								<MenuGroup key={`menuGroupTitle_${groupIndex}`}>
									<Text
										display="block"
										as="a"
										fontFamily="inter"
										fontSize={14}
										fontWeight={700}
										textTransform="uppercase"
										pb={10}
										href={url}
									>
										{title}
									</Text>
									{children &&
										children.map((item, itmeIndex) => (
											<Text
												display="block"
												as="a"
												fontSize={13}
												lineHeight={1.5}
												fontWeight={400}
												hColor="primary.regular"
												color="text"
												key={`${title}_${itmeIndex}`}
												href={item.url}
												mb={"5px"}
											>
												{item.title}
											</Text>
										))}
								</MenuGroup>
							))}
					</Row>
					<Row
						flexDirection="column"
						gap={16}
						justifyContent="center"
						mWidth={270}
					>
						{bannerData.map((item, idx) => (
							<Col key={`bannerItem_${idx}`}>
								<BannerItem {...item} />
							</Col>
						))}
					</Row>
				</Row>
			</Container>
		</CategroyMenu>
	);
};

export default CategoryItem;
