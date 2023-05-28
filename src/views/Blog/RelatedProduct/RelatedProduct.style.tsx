// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { TabTitleProps } from "components/Tab/types";
// types

// --------------------------------------------------

export const RelatedProductWrapper = styled.div`
	padding: 20px 0 20px 0;
`;
export const SliderWrapper = styled.div`
	.swiper-slide {
		width: auto;
		padding-bottom: 40px;
	}
	.bulletContainer {
		width: 30px;
		height: 2px;
		border-radius: 0px;
		background: ${themeGet("colors.text")};
		opacity: 100%;
	}
	.swiper-pagination-bullets {
		bottom: 0px;
	}
	.swiper-pagination-bullet-active {
		background: ${themeGet("colors.primary.regular")};
	}
	${({ theme }) => theme.mediaQueries.lg} {
		.bulletContainer {
			display: none;
		}
	}
`;

export const TabTitle = styled.div<TabTitleProps>`
	font-size: 14px;
	font-weight: 800;
	margin-right: 30px;
	padding-bottom: 1px;
	position: relative;
	text-transform: uppercase;
	color: ${({ selected }) =>
		selected ? themeGet("colors.black.dark") : themeGet("colors.text")};
	cursor: pointer;
	${({ theme }) => theme.mediaQueries.xxs} {
		margin-bottom: 10px;
		margin-right: 10px;
	}
`;
export const TabContainerWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;
