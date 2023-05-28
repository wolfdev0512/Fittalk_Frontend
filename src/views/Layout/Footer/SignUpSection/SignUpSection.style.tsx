// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Input } from "components/Input";

// ---------------------------------------------------

export const SignUpInner = styled.div`
	max-width: 575px;
	width: 100%;
	background: ${themeGet("colors.white")};
	padding: 30px;
	border-radius: ${({ theme }) => theme.radii.small};
	position: relative;
	${({ theme }) => theme.mediaQueries.sm} {
		padding: 32px 32px;
	}
	${({ theme }) => theme.mediaQueries.xxs} {
		padding: 32px 22px;
	}
`;

export const WareHouseInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	.warehouseCtaContainer {
		z-index: 1;
	}
`;
export const WareHouseBgContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	img {
		filter: blur(4px) !important;
	}
	&::after {
		content: " ";
		background-color: rgb(34 37 41);
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		transition: all 300ms ease-in-out;
		opacity: 0.8;
	}
`;
export const SignUpBgContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	top: 0;
	&::after {
		content: " ";
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		transition: all 300ms ease-in-out;
		background-color: rgba(227, 30, 49, 0.639216);
	}
`;
export const SignUpWrapper = styled.div`
	position: relative;
`;

export const ContactIntput = styled(Input)`
	background-color: #f4f4f4 !important;
`;
