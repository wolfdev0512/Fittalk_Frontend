// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------------
export const BlogViewItemWrapper = styled.div`
	padding: 0 0 10px 0;
`;
export const BlogTitleView = styled.div`
	${({ theme }) => theme.mediaQueries.xs} {
		width: 100%;
		padding: 20px 0;
		position: relative;
		::after {
			position: absolute;
			content: " ";
			width: 100vw;
			height: 1px;
			background-color: ${themeGet("colors.border")};
			right: -15px;
			bottom: 0;
		}
		::before {
			width: 100vw;
			height: 1px;
			content: " ";
			position: absolute;
			background-color: ${themeGet("colors.border")};
			right: -15px;
			top: 0;
		}
	}
`;

export const VisitWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${themeGet("colors.black.dark")};
	font-size: 12px;
	font-weight: 700;
	line-height: 1;
	text-transform: uppercase;
	cursor: pointer;
	svg {
		color: ${themeGet("colors.black.dark")};
	}
`;
export const SliderWrapper = styled.div`
	.swiper-slide {
		width: auto;
		padding: 10px 0;
	}
	.bulletContainer {
		width: 30px;
		height: 2px;
		border-radius: 0px;
		background: ${themeGet("colors.text")};
		opacity: 100%;
	}
	.swiper-pagination-bullets {
		bottom: 5px;
	}
	.swiper-pagination-bullet-active {
		background: ${themeGet("colors.primary.regular")};
	}
	@media screen and (min-width: 425px) {
		.bulletContainer {
			display: none;
		}
	}
`;
