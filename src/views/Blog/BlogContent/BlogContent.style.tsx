// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------

export const BlogContentWrapper = styled.div`
	margin-top: -100px;
	padding: 50px;
	background-color: white;
	border-radius: 10px;
	z-index: 10;
	display: flex;
	position: relative;

	${({ theme }) => theme.mediaQueries.lg} {
		padding: 50px 35px;
	}
	${({ theme }) => theme.mediaQueries.md} {
		flex-direction: column;
		padding: 35px 20px;
	}
	${({ theme }) => theme.mediaQueries.sm} {
		padding: 35px 20px;
	}
`;

export const BlogDate = styled.div`
	height: 66px;
	width: 44px;
	position: absolute;
	background: ${themeGet("colors.primary.dark")};
	padding: 13px 6px 10px 6px;
	right: 56px;
	top: -33px;
	z-index: 1;
	${({ theme }) => theme.mediaQueries.lg} {
		right: 63px;
	}
	${({ theme }) => theme.mediaQueries.md} {
		right: 33px;
	}
`;

export const LetterWrapper = styled.div`
	flex: 1;
	color: ${themeGet("colors.text")};
	padding: 10px;

	.user_info {
		p {
			padding: 0 10px;
		}
		img {
			border-radius: ${({ theme }) => theme.radii.circle};
		}
	}

	// Redefined RichText Style
	.btn {
		text-decoration: none;
		color: ${themeGet("colors.white")};
		border: none;
		:hover {
			text-decoration: none;
		}
	}
	.btn-success {
		background: ${themeGet(`colors.primary.regular`)};
		:hover,
		:active {
			background: ${themeGet(`colors.primary.dark`)};
		}
	}
	p {
		padding-bottom: 5px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		padding: 10px 0;
	}

	p,
	li {
		font-weight: 400;
		font-size: 16px;
	}

	b,
	strong {
		font-weight: ${themeGet("fontWeights.bold")};
		color: #140a01;
	}

	hr {
		margin: 10px 0;
	}

	a {
		color: ${themeGet("colors.text")};
		font-weight: 500;
		:hover {
			text-decoration: underline;
		}
	}

	${({ theme }) => theme.mediaQueries.md} {
		.two-col {
			.col-1 {
				flex: 0 0 auto;
				width: 100%;
			}
			.col-2 {
				flex: 0 0 auto;
				width: 100%;
			}
		}
		padding: 0px;
	}
`;

export const IconItem = styled.div`
	width: 36px;
	height: 36px;
	font-size: 20px;
	display: flex;
	background: ${themeGet("colors.white")};
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;
	:hover {
		background: rgb(243 244 246);
	}

	${({ theme }) => theme.mediaQueries.md} {
		width: 26px;
		height: 26px;
	}
`;
