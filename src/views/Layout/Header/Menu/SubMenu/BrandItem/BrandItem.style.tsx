// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------
export const BrandMenu = styled.div`
	padding: 25px 0;
	height: 100%;
	overflow: auto;
	.linkWrapper {
		max-height: 70vh;
	}
	.brandImageItem {
		img {
			border-bottom: 1px solid ${themeGet("colors.border")} !important;
		}
	}
`;
export const MenuGroup = styled.div`
	max-width: 170px;
`;
