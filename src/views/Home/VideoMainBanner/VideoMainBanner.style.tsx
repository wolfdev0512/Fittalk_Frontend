// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Container } from "components/Container";

// ---------------------------------------------

export const MainCarouselContainer = styled.div`
	position: relative;
	background: ${themeGet("colors.brown.100")};
	.swiper-pagination-bullets {
		width: fit-content;
		bottom: 29px;
		left: 183px;
		${({ theme }) => theme.mediaQueries.lg} {
			left: 103px;
		}
		${({ theme }) => theme.mediaQueries.md} {
			display: none;
		}
	}
`;
export const BreadcrumbsWrapper = styled.div`
	position: absolute;
	top: 23px;
	width: 100%;
`;
export const BreadcrumbsInner = styled(Container)`
	z-index: 2;
`;
export const BannerWrapper = styled.div`
	.bulletContainer {
		width: 30px;
		height: 2px;
		background: #f8f9fa;
		border-radius: 0px;
	}
`;
