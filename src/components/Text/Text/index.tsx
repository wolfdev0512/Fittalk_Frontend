// styled system
import styled, { DefaultTheme } from "styled-components";
import { space, typography, display } from "styled-system";

// types
import { TextProps } from "../types";
// utils
import getThemeValue from "utils/getThemeValue";

interface ThemedProps extends TextProps {
	theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
	return getThemeValue(`colors.${color}`, color)(theme);
};

const getHoverColor = ({ hColor, theme }: ThemedProps) => {
	return getThemeValue(`colors.${hColor}`, hColor)(theme);
};
// -------------------------------------------------------
const TextWrapper = styled.p<TextProps>`
	color: ${getColor};
	line-height: 1.5;
	${({ pointered }) => pointered && `cursor: pointer;`}
	${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
	${({ tDecorations }) => tDecorations && `text-decoration: ${tDecorations};`}
  ${space}
  ${display}
  ${typography}
  :hover {
		color: ${getHoverColor};
	}
`;

export default TextWrapper;
