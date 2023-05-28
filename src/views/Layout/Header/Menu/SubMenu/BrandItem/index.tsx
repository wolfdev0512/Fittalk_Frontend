import React, { FC } from "react";
// component
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Container } from "components/Container";
// utils
import { brandData } from "utils/constData";
import { getGroupByAlpha } from "utils/helper-string";
// styled component
import { BREAKPOINTS } from "theme/base";
import { BrandMenu, MenuGroup } from "./BrandItem.style";
// type
import { SortedTypeByAlpha } from "types/utils/helper-type";
import { SubItemProps } from "../../types";

// ------------------------------------------------------

interface MenuLink {
	title: string;
	link: string;
}
const { lg } = BREAKPOINTS;

const BrandItem: FC<SubItemProps> = () => {
	const brandLinks: Array<SortedTypeByAlpha<MenuLink>> =
		getGroupByAlpha<MenuLink>(brandData.brandData);
	return (
		<BrandMenu>
			<Container>
				<Row gap={40} justifyContent="space-between">
					<Row
						flexDirection="column"
						flexWrap="wrap"
						className="linkWrapper"
						gap={5}
					>
						{brandLinks.map(({ group, children }, groupIndex) => (
							<MenuGroup key={`menuGroupTitle_${groupIndex}`}>
								<Text
									fontFamily="inter"
									fontSize={14}
									fontWeight={700}
									textTransform="uppercase"
								>
									{group}
								</Text>
								{children.slice(0, 2).map((item, itmeIndex) => (
									<Text
										fontSize={13}
										fontWeight={400}
										color="text"
										key={`${group}_${itmeIndex}`}
										hColor="primary.regular"
										pb="3px"
									>
										{item.title}
									</Text>
								))}
								{children.length > 2 && (
									<Text
										color="textBold"
										tDecorations="underline"
										fontWeight={400}
										fontSize={13}
										pb="3px"
									>
										See more
									</Text>
								)}
							</MenuGroup>
						))}
					</Row>
					<Row
						flexDirection="column"
						gap={16}
						justifyContent="center"
						mWidth={300}
						responsive={{ [lg]: { mWidth: 250 } }}
					>
						<Text
							fontFamily="inter"
							fontSize={14}
							fontWeight={700}
							textTransform="uppercase"
						>
							Top Brands
						</Text>
						{brandData.brandList.map((item, brandIndex) => (
							<Col key={`brandIndex_${brandIndex}`} className="brandImageItem">
								<Image
									src={item}
									width={152}
									height={55}
									oFit="contain"
								></Image>
							</Col>
						))}
					</Row>
				</Row>
			</Container>
		</BrandMenu>
	);
};

export default BrandItem;
