import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
	theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
	if (isLoading === true) {
		return `
      &:disabled,
      &.fittalk-button--disabled {
        cursor: not-allowed;
      }
    `;
	}

	return `
    &:disabled,
    &.fittalk-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
	$isLoading?: boolean;
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
	return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
	user-select: none;
	position: relative;
	display: inline-flex;
	font-family: inherit;
	font-size: 14px;
	font-weight: 800;
	align-items: center;
	justify-content: center;
	border: 0;
	border-radius: ${({ theme }) => theme.radii.small};

	cursor: pointer;
	box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
	padding: 10px 25px;
	line-height: 1;
	opacity: ${getOpacity};
	outline: 0;
	transition: box-shadow 0.2s;
	text-transform: uppercase;
	overflow: hidden;

	:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		opacity: 0;
		transition: opacity 0.2s;
		pointer-events: none;
	}
	:after {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		border-radius: 50%;
		padding: 50%;
		width: 10px;
		height: 10px;
		background-color: #fff;
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(1);
		transition: opacity 1s, transform 0.5s;
	}

	&:hover:not(:disabled):not(.fittalk-button--disabled):not(
			.fittalk-button--disabled
		):not(:active) {
		:before {
			opacity: 0.08;
		}
	}

	&:active:not(:disabled):not(.fittalk-button--disabled):not(
			.fittalk-button--disabled
		) {
		box-shadow: 0 5px 5px -3px #0003, 0 8px 10px 1px #00000024,
			0 3px 14px 2px #0000001f;
		:after {
			opacity: 0.32;
			transform: translate(-50%, -50%) scale(0);
			transition: transform 0s;
		}
	}

	${getDisabledStyles}
	${variant({
		prop: "scale",
		variants: scaleVariants,
	})}
  ${variant({
		variants: styleVariants,
	})}
  ${layout}
  ${space}
`;

export default StyledButton;
