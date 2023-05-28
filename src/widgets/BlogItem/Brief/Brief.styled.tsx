// styled system
import styled from "styled-components";
// ---------------------------------------------

export const BlogBriefWrapper = styled.div`
	width: 100%;
	min-height: 150px;
	position: relative;
	padding: 15px 20px;
	text-align: center;
	margin-right: 10px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	align-items: end;
	&::after {
		content: " ";
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(26, 24, 24, 0.5);
	}
	img {
		transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
	}
	&:hover {
		img {
			transform: scale(1.1);
		}
	}
`;
export const BreifContentWrapper = styled.div`
	z-index: 1;
	position: relative;
	.briefContent {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: normal;
		max-width: 300px;
		text-align: left;
		font-weight: 900;
		line-height: 1.3;
	}
`;
