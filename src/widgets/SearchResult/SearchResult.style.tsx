// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------
type ItemWrapper = {
	padding?: string;
};
type ImageContainer = {
	height?: number;
	width?: number;
};
export const SearchResultWrapper = styled.div`
	position: absolute;
	bottom: 0;
	transform: translateY(100%);
	width: 450px;
	background: white;
	max-height: calc(100vh - 80px);
	overflow: auto;
	border: 1px solid #ccc !important;
	box-shadow: #666 0px 0px 0px;
	border-radius: ${({ theme }) => theme.radii.small};
`;

export const SearchCategory = styled.div`
	background: ${themeGet("colors.primary.regular")};
`;

export const CategoryItemWrapper = styled.div<ItemWrapper>`
	display: flex;
	align-items: center;
	padding: ${({ padding = "5px 10px 5px 20px" }) => padding};
	cursor: pointer;
	:hover {
		background: #f8f8f8;
	}
	.searched {
		font-weight: 600;
	}
	.searchresult {
		font-family: ${themeGet("fonts.inter")};
		font-weight: 400;
	}
	${({ theme }) => theme.mediaQueries.md} {
		.categoryItem {
			background: #00000075;
			border-radius: 5px;
			padding: 6px;
			color: ${themeGet("colors.white")};
			font-weight: 400;
		}
		.productItem {
			color: ${themeGet("colors.black.regular")};
		}
		.searchItem {
			background: #00000075;
			border-radius: 5px;
			padding: 6px;
			color: ${themeGet("colors.white")};
			span {
				font-size: 14px;
			}
		}
	}
`;

export const ItemImageContainer = styled.div<ImageContainer>`
	height: ${({ height = 60 }) => height}px;
	width: ${({ width = 60 }) => width}px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ItemBanner = styled.div`
	position: relative;
	width: 100%;
	height: 125px;
`;

export const SearchLink = styled.div`
	background: #f8f8f8;
	padding: 10px 10px 10px 20px;
	cursor: pointer;
`;
