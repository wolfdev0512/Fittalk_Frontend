// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Button } from "components/Button";

// ------------------------------------------
export const MenuBarWrapper = styled.div`
	position: relative;
	width: 100%;
	height: max-content;
	min-height: 100vh;
`;
export const AccordionWrapper = styled.div`
	& > div:last-child {
		.accordionHeader {
			border-bottom: none;
		}
	}
`;

export const CloseIconWrapper = styled.div`
	color: ${themeGet("colors.black.dark")};
	cursor: pointer;
`;

export const CreateUserButton = styled(Button)`
	width: 100%;
	box-shadow: none;
`;

export const CTAButtonWrapper = styled.div`
	padding: 15px 20px;
	font-weight: 700;
	color: ${themeGet("colors.white")};
	background: ${themeGet("colors.primary.regular")};
	border-bottom: 1px solid #b71726;
	cursor: pointer;
	.arrow-icon {
		font-size: 0;
	}
	text-transform: uppercase;
`;
