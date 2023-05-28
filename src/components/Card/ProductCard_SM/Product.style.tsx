// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ----------------------------------------------------

export const ProductWrapper = styled.div`
	cursor: pointer;
	margin: 8px 10px 20px 10px;
	padding: 0px 10px 6px 10px;
	background: ${themeGet("colors.white")};
	position: relative;
	&:hover {
		box-shadow: 0 2.7px 3.3px rgb(0 0 0 / 4%), 0 8.9px 11.2px rgb(0 0 0 / 6%),
			0 0px 20px rgb(0 0 0 / 10%);
	}
`;
export const ProductInfoContainer = styled.div`
	padding-bottom: 20px;
	border-bottom: 1px solid ${themeGet("colors.border")}; ;
`;
