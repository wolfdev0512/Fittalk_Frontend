import { Text } from "components/Text";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------
export const IconWrapper = styled.div`
	padding: 0 10px;
	background: #efefef;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	cursor: pointer;
`;

export const CartCounts = styled(Text)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
	background: ${themeGet("colors.black.regular")};
	color: ${themeGet("colors.white")};
	cursor: pointer;
	height: 40px;
	width: 40px;
`;

export const CartWrapper = styled.div`
	border-radius: ${({ theme }) => theme.radii.small};

	overflow: hidden;
`;
