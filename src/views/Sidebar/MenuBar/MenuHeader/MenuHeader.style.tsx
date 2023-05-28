// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------

export const MenuHeaderWrapper = styled.div<{ hColor: string }>`
	padding: 15px 20px;
	border-bottom: 1px solid ${themeGet("colors.border")};
	cursor: pointer;
	.arrow-icon {
		font-size: 0;
	}
	text-transform: uppercase;
`;
export const MenuHeaderWrapperForDeep2 = styled(MenuHeaderWrapper)`
	background-color: #f8f9fa;
`;
