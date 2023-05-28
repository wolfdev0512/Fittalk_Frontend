// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { BadgeContainerProps } from "../types";
// ----------------------------------------------------

export const BadgeWrapper = styled.div<BadgeContainerProps>`
	border-radius: ${({ theme }) => theme.radii.small};
	cursor: pointer;
	background: ${({ badgeBg }) => themeGet(`colors.${badgeBg}`)};
	color: ${({ badgeColor }) => themeGet(`colors.${badgeColor}`)};
	font-weight: ${themeGet(`fontWeights.bolder`)};
	font-size: 10px;
	padding: 7px 10px;
	text-transform: uppercase;
	width: fit-content;
`;
