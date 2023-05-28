import React from "react";
// component
import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
// import { useLinkItem } from "components/hoc";
import { useAccordion } from "components/Collapse";
// hook
import { useSideBar } from "hooks";
//assets
import { IoClose } from "react-icons/io5";
import { LocationIcon, AccountIcon } from "assets/icon";
import LogoImage from "assets/images/layout/Logo.svg";
// hook
import { useRouter } from "hooks";
// views
import { MenuHeaderForDeep1, MenuHeaderForDeep2 } from "./MenuHeader";
// styled component
import {
	MenuBarWrapper,
	CloseIconWrapper,
	AccordionWrapper,
	CreateUserButton,
	CTAButtonWrapper,
} from "./MenuBar.style";
// data
import { MenuLinks } from "utils/constData";
import { Text } from "components/Text";
import NW_Rewards_LogoImage from "assets/images/layout/NW_Rewards_Logo_Red.png";
import { useLinkItem } from "components/hoc";

// ------------------------------------------------------

// Genereted Component by HOC
const Accordion = useAccordion([MenuHeaderForDeep1, MenuHeaderForDeep2]);

// const IconLinkItem = useLinkItem(IconItemWrapper);
const MenuItem = useLinkItem(CTAButtonWrapper);

export default function index() {
	const { move } = useRouter();
	const { closeBar } = useSideBar();

	return (
		<MenuBarWrapper>
			<Row
				padding="5px 20px"
				justifyContent="space-between"
				alignItems="center"
			>
				<Image
					src={LogoImage}
					height={68}
					width={135}
					onClick={() => move("/")}
				/>
				<CloseIconWrapper
					onClick={() => {
						closeBar();
					}}
				>
					<IoClose size={28} />
				</CloseIconWrapper>
			</Row>
			<AccordionWrapper>
				<Accordion items={MenuLinks} />
			</AccordionWrapper>

			<MenuItem
				href="https://www.nutritionwarehouse.com.au/pages/store-locator"
				title="FIND A STORE"
				icon={<LocationIcon iColor="white" />}
				iconGaping={11}
			/>
			<MenuItem
				href="https://www.nutritionwarehouse.com.au/account/login"
				title="SIGN IN"
				icon={<AccountIcon.Account iColor="white" />}
				iconGaping={11}
			/>

			<Row
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				padding="15px 20px"
			>
				<Row gap={10} padding="0 0 5px 0" alignItems="center">
					<Image src={NW_Rewards_LogoImage} width={74} height={74} />
					<Col flex="1">
						<Text textTransform="uppercase" color="black.dark" fontWeight={900}>
							Free to Join - Cash back rewards on every purchase you make -
							<Text as="a" color="primary.regular">
								{" "}
								Learn more
							</Text>
						</Text>
					</Col>
				</Row>
				<CreateUserButton
					startIcon={<AccountIcon.CreateAccountIcon />}
					variant="outlined"
				>
					Create an account
				</CreateUserButton>
			</Row>
		</MenuBarWrapper>
	);
}
