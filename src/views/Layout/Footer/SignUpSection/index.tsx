import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Text } from "components/Text";
// assets
import WarehouseImage from "assets/images/layout/NutritionWarehouse.jpg";
import SignUpWrapperImage from "assets/images/layout/SignUpWrapper.jpg";
// styeld component
import { BREAKPOINTS } from "theme/base";
import {
	SignUpInner,
	SignUpWrapper,
	WareHouseInner,
	WareHouseBgContainer,
	SignUpBgContainer,
	ContactIntput,
} from "./SignUpSection.style";

// ---------------------------------------------------------

const { lg, md } = BREAKPOINTS;

const SignUpSection = () => {
	return (
		<Row responsive={{ [md]: { flexDirection: "column" } }}>
			<Col item={8.4} responsive={{ [lg]: { item: 11 }, [md]: { item: 24 } }}>
				<WareHouseInner>
					<Row
						flexDirection="column"
						className="warehouseCtaContainer"
						alignItems="center"
						justifyContent="center"
					>
						<Text
							color="white"
							textTransform="uppercase"
							fontFamily="changa"
							fontSize={20}
							fontWeight={900}
						>
							Store Locator
						</Text>
						<Text
							color="white"
							fontSize={14}
							fontWeight={400}
							padding="0 0 15px 0"
						>
							100 Stores all around Australia
						</Text>
						<Button
							as="a"
							href="https://www.nutritionwarehouse.com.au/pages/store-locator"
						>
							Find a Store
						</Button>
					</Row>
					<WareHouseBgContainer>
						<Image
							src={WarehouseImage}
							oFit="cover"
							width={500}
							height={333}
							mode="fill"
						></Image>
					</WareHouseBgContainer>
				</WareHouseInner>
			</Col>
			<Col item={15.6} responsive={{ [lg]: { item: 13 }, [md]: { item: 24 } }}>
				<SignUpWrapper>
					<Row zIndex={1} padding="70px 10px" justifyContent="center">
						<SignUpInner>
							<Row
								alignItems="center"
								responsive={{
									580: {
										flexDirection: "column",
										gap: 30,
										alignItems: "flex-start",
									},
								}}
							>
								<Col flex="0 0 33.333333%">
									<Row flexDirection="column">
										<Text
											fontSize={20}
											fontWeight={800}
											fontFamily="changa"
											textTransform="uppercase"
											lineHeight={1}
											pb="2px"
										>
											Sign Up For <br></br>
											<Text
												as="span"
												color="primary.regular"
												fontSize={20}
												fontWeight={800}
												lineHeight={1}
											>
												$ 5 Off
											</Text>
										</Text>
										<Text color="text" fontSize={14}>
											Your first order
										</Text>
									</Row>
								</Col>
								<Col
									flex="0 0 66.666667%"
									responsive={{
										580: {
											item: 24,
										},
									}}
								>
									<Row alignItems="center" gap={5}>
										<Col flex="1">
											<ContactIntput placeholder="Enter email  here"></ContactIntput>
										</Col>
										<Button>SIGN UP</Button>
									</Row>
								</Col>
							</Row>
						</SignUpInner>
					</Row>
					<SignUpBgContainer>
						<Image
							src={SignUpWrapperImage}
							oFit="cover"
							width={500}
							height={333}
							mode="fill"
						></Image>
					</SignUpBgContainer>
				</SignUpWrapper>
			</Col>
		</Row>
	);
};

export default SignUpSection;
