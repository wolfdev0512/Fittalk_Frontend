import { Text } from "components/Text";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------
export const LinkSectionWrapper = styled.div`
	padding: 50px 0 30px;
	.hiddenWrapper {
		& > div:last-child {
			& > .accordionHeader {
				border: none;
			}
		}
	}
`;
export const CategoryItemHeader = styled(Text)`
	color: ${themeGet("colors.white")};
	text-transform: uppercase;
	margin-bottom: 17px;
	font-weight: 900;
	font-size: 16px;
	min-height: 20px;
	font-family: ${themeGet("fonts.changa")};
`;
export const CategoryItem = styled.div`
	cursor: pointer;
	padding-bottom: 5px;
	transition: all 0.1s ease-in-out;
	color: ${themeGet("colors.text")};

	:hover {
		color: ${themeGet("colors.white")};
	}
`;
export const AccordionItemWrapper = styled.div``;
