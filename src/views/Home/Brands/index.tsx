import React from "react";
import Image from "next/image";
// component
import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
// styled component
import { BrandWrapper } from "./Brand.style";
// assets
import BrandImage1 from "assets/images/temp/brand1.png";
import BrandImage2 from "assets/images/temp/brand2.png";
import BrandImage4 from "assets/images/temp/brand4.png";
import BrandImage5 from "assets/images/temp/brand5.png";
import BrandImage6 from "assets/images/temp/brand6.png";
import BrandImage7 from "assets/images/temp/brand7.png";
// ---------------------------------------------
const BrandView = () => {
	return (
		<BrandWrapper>
			<Row alignItems="center" justifyContent="space-between" gap={15}>
				<Button>SHOP ALL BRANDS</Button>
				<Col>
					<Image src={BrandImage1}></Image>
				</Col>
				<Col>
					<Image src={BrandImage2}></Image>
				</Col>
				<Col>
					<Image src={BrandImage4}></Image>
				</Col>
				<Col>
					<Image src={BrandImage5}></Image>
				</Col>
				<Col>
					<Image src={BrandImage6}></Image>
				</Col>
				<Col>
					<Image src={BrandImage7}></Image>
				</Col>
			</Row>
		</BrandWrapper>
	);
};
export default BrandView;
