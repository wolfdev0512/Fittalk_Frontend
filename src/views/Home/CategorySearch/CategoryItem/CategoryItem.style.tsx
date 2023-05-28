// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// ----------------------------------------------

export const ItemWrapper = styled.div`
	cursor: pointer;
	padding: 6px 20px;
	margin-right: 10px;
	border-radius: 100px;
	text-transform: uppercase;
	font-size: 10px;
	font-weight: 400;
	color: ${themeGet("colors.text")};
	background: #f8f9fa;
	cursor: pointer;
	:hover {
		box-shadow: inset 0 -0.7px 0.3px 0.3px #0003;
	}
`;
