import React, { useMemo } from "react";
// hooks
import { useRouter } from "hooks";
// component
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Row } from "components/Layout";
import { Badge } from "components/Badge";
import { Video } from "components/Video";
// type
import { BlogItemModel } from "types/model/blog";
import { BlogItemInterface } from "types/model/blog/interface";
// styled component
import {
	BannerSliderItem,
	BannerInfoWrapper,
	ProductImageWrapper,
} from "./BannerItem.style";
import { BREAKPOINTS } from "theme/base";
// -----------------------------------------------------------------------------
const { md } = BREAKPOINTS;

const MainBannerItem: React.FC<BlogItemInterface> = ({ ...props }) => {
	const { move } = useRouter();
	const blogItem = useMemo(() => new BlogItemModel(props), [props]);
	return (
		<BannerSliderItem bg_color={"white"}>
			<Row
				flexDirection="column"
				justifyContent="flex-end"
				zIndex={2}
				responsive={{ [md]: { display: "none" } }}
			>
				<BannerInfoWrapper>
					<Row flexDirection="column" gap={10}>
						{blogItem.getTagName() && (
							<Badge
								badgeBg="secondary.regular"
								onClick={() => move("/", { tag: blogItem.getTagId() })}
							>
								{blogItem.getTagName()}
							</Badge>
						)}
						<Text
							color="white"
							data-swiper-parallax="-300"
							fontSize={40}
							fontWeight={900}
							padding="0px 0 60px 0"
						>
							{blogItem.getName()}
						</Text>
					</Row>
				</BannerInfoWrapper>
			</Row>
			{!blogItem.getMedia() && (
				<ProductImageWrapper>
					{blogItem.getBlogImage() && (
						<Image
							className="mainbanner"
							src={blogItem.getBlogImage()}
							mode="fill"
							oFit="cover"
							quality={70}
							oPosition="top"
							priority
						></Image>
					)}
				</ProductImageWrapper>
			)}
			{blogItem.getMedia() && <Video media={blogItem.getMedia()} />}
		</BannerSliderItem>
	);
};

export default MainBannerItem;
