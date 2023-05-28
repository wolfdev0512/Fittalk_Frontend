// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------
export const AccordionHeaderWrapper = styled.div<{ hColor: string }>`
	padding: 15px 20px;
	border-bottom: 1px solid #868585;
	cursor: pointer;
	color: ${themeGet(`colors.white`)};
	:hover {
		color: ${({ hColor }) => themeGet(`colors.${hColor}`)};
	}
`;

export const AccordionHeaderWrapperForDeep2 = styled.div<{ hColor: string }>`
	padding: 15px 20px;
	background: rgba(255, 255, 255, 0.1);
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	cursor: pointer;
	color: ${themeGet(`colors.white`)};
	:hover {
		color: ${({ hColor }) => themeGet(`colors.${hColor}`)};
	}
`;

export const AccordionHeaderWrapperForDeep3 = styled.div<{ hColor: string }>`
	padding: 15px 20px;
	background: rgba(255, 255, 255, 0.2);
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	cursor: pointer;
	color: ${themeGet(`colors.white`)};
	:hover {
		color: ${({ hColor }) => themeGet(`colors.${hColor}`)};
	}
`;
