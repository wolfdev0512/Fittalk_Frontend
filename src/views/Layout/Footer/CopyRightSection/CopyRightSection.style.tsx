// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------

export const CopyRightSectionWrapper = styled.div`
	padding: 21px 0;
	font-size: 11px;
	color: ${themeGet("colors.text")};
	border-top: 1px solid #868585;
	${({ theme }) => theme.mediaQueries.lg} {
		border: none;
	}
	${({ theme }) => theme.mediaQueries.sm} {
		color: ${themeGet("colors.white")};
		font-size: 12px;
		font-weight: 400;
	}
`;
export const StyledLinkItem = styled.div`
	cursor: pointer;
	transition: all 0.1s ease-in-out;

	:hover {
		color: ${themeGet("colors.white")};
	}
`;

export const CompanyAddress = styled.address`
	line-height: 40px;
`;
