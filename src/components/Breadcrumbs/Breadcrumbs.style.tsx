// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------------

export const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 900;
	cursor: pointer;
	color: ${themeGet("colors.white")};
	font-size: 12px;
	:hover {
		text-decoration: underline;
	}
	text-transform: capitalize;
`;
