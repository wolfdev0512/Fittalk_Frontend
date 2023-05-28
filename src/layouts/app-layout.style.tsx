// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------------
export const AppLayoutWrapper = styled.div`
	position: relative;
	.categorySearchView {
		background-color: ${themeGet("colors.border")};
		${({ theme }) => theme.mediaQueries.md} {
			background-color: white;
		}
	}
`;
