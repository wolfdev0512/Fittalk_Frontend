// styled system
import styled from "styled-components";

// types

import { Container } from "components/Container";
import { BannerItemProps } from "components/Slider";
// -----------------------------------------------------

export const BannerSliderItem = styled.div<BannerItemProps>`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	width: 100%;
	height: 65vh;
	padding: 100px 0;
	background: ${({ bg_color }) => bg_color};
	position: relative;

	${({ theme }) => theme.mediaQueries.md} {
		height: 343px;
	}

	${({ theme }) => theme.mediaQueries.xs} {
		height: 192px;
		img {
			width: 92px;
			height: 38px;
		}
	}
`;
export const ProductImageWrapper = styled.div`
	:after {
		content: " ";
		background: rgba(0, 0, 0, 0.2);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}
`;

export const BannerInfoWrapper = styled(Container)`
	z-index: 1;
	width: 100%;
`;
