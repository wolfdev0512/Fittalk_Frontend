// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// --------------------------------------------------

export const IconItem = styled.div`
	width: 35px;
	height: 35px;
	border-radius: ${({ theme }) => theme.radii.circle};
	display: flex;
	background: ${themeGet("colors.white")};
	justify-content: center;
	align-items: center;
	cursor: pointer;
	svg {
		height: 15px;
		width: 15px;
	}
	svg,
	path {
		color: ${themeGet("colors.primary.regular")} !important;
	}
`;
