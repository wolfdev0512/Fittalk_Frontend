import React, { FC } from "react";
// component
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";

// styled component
import { PickupMenu, MenuItemWrapper } from "./PickupItem.styles";
import { useLinkItem } from "components/hoc";

// assets
// import OrdertrackingImage from "assets/images/layout/nwh-svg-icon-ordertracking--red.svg";
import CollectImage from "assets/images/layout/nwh-svg-icon-cnc_25x25.webp";

// ------------------------------------------------------
const MenuItem = useLinkItem(MenuItemWrapper, "wrapper");
const PickupItem: FC = () => {
	return (
		<PickupMenu>
			<MenuItem href="https://www.nutritionwarehouse.com.au/pages/click-and-collect">
				<Row gap={10}>
					<Col>
						<Image src={CollectImage} width={20} height={20}></Image>
					</Col>
					<Text fontSize={14} fontWeight={700} textTransform="uppercase">
						Click & Collect
					</Text>
				</Row>
			</MenuItem>
			{/* <MenuItem>
				<Row gap={10}>
					<Col>
						<Image src={OrdertrackingImage} width={20} height={20}></Image>
					</Col>
					<Text fontSize={14} fontWeight={700} textTransform="uppercase">
						Track My Order
					</Text>
				</Row>
			</MenuItem> */}
		</PickupMenu>
	);
};

export default PickupItem;
