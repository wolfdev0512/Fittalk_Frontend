import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Hidden } from "components/Hidden";
// hook
import { useRouter } from "hooks";
// HOC
import { useLinkItem } from "components/hoc";
//assets
import {
	PhoneIcon,
	CheckoutIcon,
	AccountIcon,
	RewardsIcon,
	SocialIcon,
	GiftIcon,
	ShoppingBagIcon,
	LocationIcon2,
} from "assets/icon";
import LogoImage from "assets/images/layout/Logo.svg";
import FooterImageR from "assets/images/layout/nwh-footer-3-right.svg";
import FooterImageL from "assets/images/layout/nwh-footer-3-left.svg";

// styled component
import {
	ConnectionSectionWrapper,
	ConnectionSectionInner,
	ServiceItem,
	IconItem,
	ConnectBGContainer,
} from "./ConnectSection.style";
import { BREAKPOINTS } from "theme/base";
import { Container } from "components/Container";

// Genereted Componentby HOC
const LinkItem = useLinkItem(ServiceItem);
const IconLinkItem = useLinkItem(IconItem, "icon");
// --------------------------------------------------
const { lg, sm } = BREAKPOINTS;

const ConnectSection = () => {
	const { move } = useRouter();

	return (
		<ConnectionSectionWrapper>
			<Container className="connectview">
				<ConnectionSectionInner>
					<Row flexWrap="wrap">
						<Col
							item={4}
							responsive={{ [lg]: { item: 8 }, [sm]: { item: 24 } }}
						>
							<Image
								className="logo_Image"
								src={LogoImage}
								height={72}
								width={143}
								onClick={() => move("/")}
							/>
						</Col>
						<Col
							item={6}
							responsive={{ [lg]: { item: 8 }, [sm]: { item: 24 } }}
						>
							<Row flexDirection="column" gap={10} padding="0 0 10px 0">
								<Text
									fontSize={24}
									fontWeight={700}
									color="white"
									fontFamily="changa"
									textTransform="uppercase"
								>
									Customer Support
								</Text>
								<Text fontSize={20} fontWeight={700} fontFamily="changa">
									1300 837 785
								</Text>
								<Hidden wHide={[sm]}>
									<Text fontSize={14}>
										Open: Mon - Fri <br></br>
										9:00am - 5:00pm
									</Text>
								</Hidden>
							</Row>
						</Col>
						<Col
							item={4}
							responsive={{ [lg]: { item: 8 }, [sm]: { item: 12 } }}
						>
							<Row
								flexDirection="column"
								padding="0 15px"
								responsive={{ [sm]: { padding: "0" } }}
							>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="Contact Us"
									icon={<PhoneIcon />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/pages/contact"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="Find a Store"
									icon={<LocationIcon2 />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/pages/store-locator"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="Checkout"
									icon={<CheckoutIcon />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="My Account"
									icon={<AccountIcon.SoAccount />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/account/login"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="My Active Rewards"
									icon={<RewardsIcon.Activity />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/pages/my-active-rewards"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="Gift Cards"
									icon={<GiftIcon />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/collections/gift-cards"
								/>
								<LinkItem
									iconWidth={15}
									iconSlot="start"
									title="Click and Collect"
									icon={<ShoppingBagIcon />}
									iconGaping={10}
									href="https://www.nutritionwarehouse.com.au/pages/click-and-collect"
								/>
							</Row>
						</Col>
						<Col
							item={4}
							responsive={{ [lg]: { item: 8 }, [sm]: { item: 12 } }}
							className="links"
						>
							<Row
								flexDirection="column"
								padding="0 15px"
								responsive={{ [sm]: { padding: "0" } }}
							>
								<LinkItem
									title="FAQ’S"
									href="https://www.nutritionwarehouse.com.au/pages/faq"
								/>
								<LinkItem
									title="Ordering"
									href="https://www.nutritionwarehouse.com.au/pages/ordering"
								/>
								<LinkItem
									title="Shipping"
									href="https://www.nutritionwarehouse.com.au/pages/shipping"
								/>
								<LinkItem
									title="Returns"
									href="https://www.nutritionwarehouse.com.au/pages/returns"
								/>
								<LinkItem
									title="Student Discount"
									href="https://www.nutritionwarehouse.com.au/pages/student-discount"
								/>
								<LinkItem
									title="Track Your Order"
									href="https://www.nutritionwarehouse.com.au/pages/store-locator#orderTracker"
								/>
								<LinkItem
									title="Best Price Guarantee"
									href="https://www.nutritionwarehouse.com.au/pages/best-price-guarantee"
								/>
								<LinkItem
									title="Customer Service"
									href="https://www.nutritionwarehouse.com.au/pages/customer-service"
								/>

								<LinkItem
									title="About Us"
									href="https://www.nutritionwarehouse.com.au/pages/about-us"
								/>
							</Row>
						</Col>
						<Col
							item={5}
							responsive={{ [lg]: { item: 8 }, [sm]: { item: 12 } }}
						>
							<Hidden wHide={[sm]}>
								<Row gap={30} flexDirection="column" padding="0 0 10px 0">
									<Col>
										<Text
											fontSize={20}
											fontWeight={700}
											color="white"
											fontFamily="changa"
											textTransform="uppercase"
										>
											Connect WITH US
										</Text>
									</Col>
									<Row gap={15}>
										<IconLinkItem
											icon={<SocialIcon.Facebook />}
											href="https://www.facebook.com/nutritionwarehouse/"
										/>
										<IconLinkItem
											icon={<SocialIcon.Instagram />}
											href="https://www.instagram.com/nutritionwarehouse/"
										/>
										<IconLinkItem
											icon={<SocialIcon.Youtobe />}
											href="https://www.youtube.com/channel/UCUOAnVBArSr32MhaBP7e1bQ"
										/>
										<IconLinkItem
											icon={<SocialIcon.Twitter />}
											href="https://twitter.com/nutritionwarehouse"
										/>
										<IconLinkItem
											icon={<SocialIcon.TikTok />}
											href="https://www.tiktok.com/@nutritionwarehouse"
										/>
									</Row>
								</Row>
							</Hidden>
						</Col>
					</Row>
				</ConnectionSectionInner>
			</Container>
			<ConnectBGContainer align="right">
				<Image
					src={FooterImageR}
					oFit="contain"
					oPosition="bottom"
					width={725}
					height={486}
					mode="fill"
				></Image>
			</ConnectBGContainer>
			<ConnectBGContainer align="left">
				<Image
					src={FooterImageL}
					oPosition="bottom"
					oFit="contain"
					width={725}
					height={486}
					mode="fill"
				></Image>
			</ConnectBGContainer>
		</ConnectionSectionWrapper>
	);
};

export default ConnectSection;
