import React from "react";

import { Image } from "components/Image";
import { ImageType } from "components/Image/types";
import { Text } from "components/Text";
import styled from "styled-components";

// ---------------------------------------------
export const BannerItemWrapper = styled.a<{ backColor: string }>`
	display: block;
	height: 125px;
	width: 100%;
	overflow: hidden;
	background: ${({ backColor }) => backColor};
	border-radius: ${({ theme }) => theme.radii.small};
	position: relative;
	.bannerItemIMG {
		position: absolute;
		height: auto;
		min-height: 125px;
		bottom: -30%;
		right: 0;
		width: 70% !important;
		transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	}

	.bannerItemIMG:hover {
		transform: translateY(-20px);
	}
	& > div {
		z-index: 10;
		position: absolute;
		padding: 15px;
		bottom: 0;
		left: 0;
		color: white;
	}
`;

export type BannerItemProps = {
	title: string;
	desc: string;
	imageSrc: ImageType;
	backColor: string;
};

const BannerItem: React.FC<BannerItemProps> = ({
	desc,
	title,
	imageSrc,
	backColor,
}) => {
	return (
		<BannerItemWrapper backColor={backColor}>
			<div>
				<Text
					color="white"
					fontWeight={800}
					fontSize={14}
					textTransform="uppercase"
				>
					{title}
				</Text>
				<Text color="white">{desc}</Text>
			</div>
			<Image src={imageSrc} width={189} className="bannerItemIMG"></Image>
		</BannerItemWrapper>
	);
};
export default BannerItem;
