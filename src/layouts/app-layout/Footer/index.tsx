import React from "react";
// component
import { WithContainer } from "components/Container";
// styled component
import { FooterWrapper } from "./Footer.style";

// views
import {
	ConnectView,
	LinkView,
	CopyRightView,
	PartnerView,
	SignUpView,
	SocialView,
} from "views/Layout/Footer";
// -----------------------------------------------------
const FooterLinks = () => (
	<>
		<LinkView />
		<CopyRightView />
	</>
);

const FooterView = () => {
	return (
		<FooterWrapper>
			<SignUpView />
			<WithContainer mode="wrapper" SectionView={PartnerView} />
			<ConnectView />
			<WithContainer cColor="black.dark" SectionView={FooterLinks} />
			<WithContainer cColor="primary.regular" SectionView={SocialView} />
		</FooterWrapper>
	);
};

const Footer = React.memo(FooterView);
export default Footer;
