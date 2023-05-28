// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// --------------------------------------------------

export const ConnectionSectionWrapper = styled.div`
	position: relative;
	background-color: ${themeGet("colors.primary.regular")};

	${({ theme }) => theme.mediaQueries.sm} {
		background-color: ${themeGet("colors.black.dark")};
	}
	overflow: hidden;
	padding: 55px 0;
`;
export const ConnectionSectionInner = styled.div`
	z-index: 2;
	position: relative;

	color: ${themeGet("colors.white")};
	.logo_Image {
		cursor: pointer;
	}
	.links {
		border-left: 1px solid rgba(0, 0, 0, 0.3);
	}

	${({ theme }) => theme.mediaQueries.sm} {
		padding: 55px 0 0 0;
	}
`;

export const ServiceItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	font-weight: 400;
	padding-bottom: 5px;
	transition: all 0.1s ease-in-out;
	:hover {
		text-decoration: underline;
	}
`;

export const IconItem = styled.div`
	width: 30px;
	height: 30px;
	min-height: 30px;
	min-width: 30px;
	border-radius: ${({ theme }) => theme.radii.circle};
	display: flex;
	background: ${themeGet("colors.white")};
	justify-content: center;
	align-items: center;

	svg {
		height: 15px;
		width: 15px;
	}
	cursor: pointer;
	svg,
	path {
		color: ${themeGet("colors.primary")} !important;
	}
`;

export const ConnectBGContainer = styled.div<{ align: "left" | "right" }>`
	z-index: 1;
	position: absolute;
	bottom: -15px;
	max-height: 320px;
	max-width: 38%;
	width: 34%;
	height: 100%;
	${({ theme }) => theme.mediaQueries.sm} {
		display: none;
	}
	${({ align }) => (align == "left" ? `left: -15px;` : `right: -15px;`)};
`;
