import React from "react";
// styled system
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// --------------------------------------------------------------

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const LoaderBox = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: ${themeGet("colors.white")};
	opacity: 0.75;
	z-index: 100;
`;

const Spinner = styled.div`
	width: 50px;
	height: 50px;
	border: 8px solid ${themeGet("colors.white")};
	border-top: 12px solid
		${(props) =>
			props.color ? props.color : themeGet("colors.primary.regular")};
	border-radius: ${({ theme }) => theme.radii.circle};
	transition-property: transform;
	animation-name: ${rotate};
	animation-duration: 1.2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const LoadingScreen = (color) => {
	return (
		<LoaderBox>
			<Spinner {...color} />
		</LoaderBox>
	);
};

export default LoadingScreen;
