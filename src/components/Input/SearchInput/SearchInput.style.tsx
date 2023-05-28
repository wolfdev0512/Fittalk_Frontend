// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ---------------------------------------------------
export const InputWrapper = styled.div`
	position: relative;
	.searchResultWrapper {
		display: none;
	}
	:focus-within {
		.searchResultWrapper {
			display: block;
		}
	}
	:active {
		.searchResultWrapper {
			display: block;
		}
	}
`;
export const InputInner = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	max-width: 350px;
	border: 1px solid #a3a6ac;
	border-radius: ${({ theme }) => theme.radii.small};

	overflow: hidden;
`;
export const SearchButtonContainer = styled.div`
	border: none;
	padding: 0 15px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		order: 3;
	}
	cursor: pointer;
`;
export const SearchSideBarContainer = styled.div`
	border: none;
	padding: 0 10px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${themeGet("colors.gray.100")};
`;
export const SideModeSearchInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: ${themeGet("colors.white")};
	padding: 3px 0;
`;
export const SearchIconWrapper = styled.div`
	padding: 0 10px;
`;
