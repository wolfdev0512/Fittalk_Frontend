import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
	theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({
	isSuccess = false,
	isWarning = false,
	theme,
}: StyledInputProps) => {
	if (isWarning) {
		return theme.shadows.warning;
	}

	if (isSuccess) {
		return theme.shadows.success;
	}

	return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
	switch (scale) {
		case scales.SM:
			return "32px";
		case scales.LG:
			return "48px";
		case scales.MD:
		default:
			return "42px";
	}
};

const Input = styled.input<InputProps>`
	background-color: ${({ theme }) => theme.colors.white};
	border: 0;
	border-radius: ${({ theme }) => theme.radii.small};
	box-shadow: ${getBoxShadow};
	color: ${({ theme }) => theme.colors.textDark};
	display: block;
	font-size: 12px;
	height: ${getHeight};
	outline: 0;
	padding: 0 16px;
	width: 100%;

	&::placeholder {
		color: ${({ theme }) => theme.colors.text};
	}

	&:disabled {
		box-shadow: none;
		cursor: not-allowed;
	}

	&:focus:not(:disabled) {
		/* box-shadow: ${({ theme }) => theme.shadows.focus}; */
	}
`;

Input.defaultProps = {
	scale: scales.MD,
	isSuccess: false,
	isWarning: false,
};

export default Input;
