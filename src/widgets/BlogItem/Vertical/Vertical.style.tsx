// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -----------------------------------------------
export const BlogItemWrapper = styled.div`
	position: relative;
	margin-bottom: 10px;
	.symbolText {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		svg {
			margin: 0 5px;
		}
	}
	.briefContent {
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: normal;
	}
	.briefTitle {
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: normal;
		text-align: left;
		font-weight: 900;
		line-height: 1.3;
	}
`;
export const BlogImageWrapper = styled.div`
	min-width: 160px;
	height: 106px;
	cursor: pointer;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${themeGet("colors.border")};
	border-radius: ${({ theme }) => theme.radii.small};
	overflow: hidden;
	&::after {
		content: " ";
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		transition: all 300ms ease-in-out;
	}

	:hover {
		&::after {
			background-color: rgba(0, 0, 0, 0.639216);
		}
	}

	${({ theme }) => theme.mediaQueries.xs} {
		height: 140px;
	}
`;
