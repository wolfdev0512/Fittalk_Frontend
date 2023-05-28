// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// types
import { SideBarStyledProps } from "components/Sidebar";
import { Col } from "components/Layout";

// -------------------------------------------------

export const HeaderWrapper = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 50 !important;
	background: ${themeGet("colors.white")};
	box-shadow: 0 0.5px 0.3px #0000000e, 0 1.6px 1.1px #00000014,
		0 5.5px 3px #00000021;
	.mobileWrapper {
		min-height: 72px;
	}
`;
export const HeaderInner = styled.div`
	padding-top: 123px;
	${({ theme }) => theme.mediaQueries.md} {
		padding-top: 73px;
	}
`;
export const HeaderNavWrapper = styled.div`
	z-index: 2;
	background: ${themeGet("colors.white")};
	position: relative;
	.link_title {
		font-weight: 700;
	}
	/* border-bottom: 1px solid #a3a6ac; */
`;
export const HeaderMenuWrapper = styled.div`
	background: ${themeGet("colors.black.dark")};
	z-index: 1;
	width: 100%;
	position: relative;
	box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
`;
export const HeaderMenuItem = styled.div`
	cursor: pointer;
	padding: 0 5px;
`;
export const MobileMenuItem = styled.div`
	width: 56px;
	padding: 0 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
export const LogoMWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	cursor: pointer;
	flex: 1;
	padding: 2px 5px;
`;
export const LogoDWrapper = styled(Col)`
	line-height: 0;
	cursor: pointer;
`;
export const SideBarWrapper = styled.div<SideBarStyledProps>`
	position: fixed;
	top: 0;
	right: 0;
	width: 100vw;
	height: 72px;
	transform: translate(${({ opened }) => (opened ? 0 : 102)}%);
	transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	background: ${themeGet("colors.white")};
	overflow-y: auto;
	z-index: 101;
	display: flex;
	padding: 10px 15px;
	align-items: center;
`;
export const SearchSideBarContainer = styled.div`
	border: none;
	padding: 10px 0 10px 16px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
export const InputInner = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	border: 1px solid #a3a6ac;
	border-radius: ${({ theme }) => theme.radii.small};

	overflow: hidden;
`;
