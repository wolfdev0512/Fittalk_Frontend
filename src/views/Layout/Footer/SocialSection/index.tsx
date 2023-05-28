import React from "react";
// component
import { Row } from "components/Layout";
import { Hidden } from "components/Hidden";
// HOC
import { useLinkItem } from "components/hoc";
//assets
import { SocialIcon } from "assets/icon";
// styled component
import { IconItem } from "./SocialSection.style";
import { BREAKPOINTS } from "theme/base";

// component generated by hoc
const IconLinkItem = useLinkItem(IconItem, "icon");

// -----------------------------------------
const { lg } = BREAKPOINTS;

const SocialView = () => {
	return (
		<Hidden wShow={[lg]}>
			<Row gap={15} padding="17px 0" justifyContent="center">
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
		</Hidden>
	);
};
export default SocialView;
