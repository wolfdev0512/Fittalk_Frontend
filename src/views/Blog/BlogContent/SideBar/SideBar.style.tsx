// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------

export const BlogSideWrapper = styled.aside`
	max-width: 320px;
	padding: 10px;
	${({ theme }) => theme.mediaQueries.lg} {
		max-width: 280px;
	}
	${({ theme }) => theme.mediaQueries.md} {
		max-width: none;
		padding: 10px 0;
	}
`;

export const SubscribeWrapper = styled.div`
	margin-bottom: 30px;
	.subscribe_desc {
		word-break: break-all;
	}
`;

export const BlogSideInner = styled.div`
	position: sticky;
	top: 150px;
	${({ theme }) => theme.mediaQueries.md} {
		display: flex;
		flex-direction: column;
		position: relative;
		top: 0;
	}
`;

export const AuthInfoWrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	margin-bottom: 20px;
	border: 1px solid ${themeGet("colors.border")};
	border-radius: ${({ theme }) => theme.radii.default};

	img {
		border-radius: ${({ theme }) => theme.radii.circle};
	}

	p,
	li {
		color: ${themeGet("colors.text")};
		font-weight: 400;
		font-size: 14px;
	}
`;
