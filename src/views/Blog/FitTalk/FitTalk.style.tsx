// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------------

export const FitTalkWrapper = styled.div`
	padding: 49px 0 66px 0;
	.fittalk_header {
		margin-bottom: 50px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 0 0 66px 0;
		.fittalk_header {
			margin-bottom: 30px;
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
		}
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
		background: ${themeGet("colors.gray.100")};
		opacity: 100%;
	}
	.swiper-pagination-bullets {
		bottom: 30px;
	}
	.swiper-pagination-bullet-active {
		background: ${themeGet("colors.primary.regular")};
	}
	${({ theme }) => theme.mediaQueries.xs} {
		.bulletContainer {
			display: none;
		}
	}
`;
export const SliderContainer = styled.div`
	min-height: 404px;
`;
