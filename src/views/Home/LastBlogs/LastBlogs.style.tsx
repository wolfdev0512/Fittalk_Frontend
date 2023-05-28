// styled system
import styled from "styled-components";

// ---------------------------------------------

export const LastBlogsWrapper = styled.div`
	z-index: 1;
	position: relative;
	margin-top: -100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
	.blog_breif0 {
		grid-row: 1 / span 2;
		grid-column: 1;
	}
	${({ theme }) => theme.mediaQueries.sm} {
		margin-top: -30px;

		grid-template-columns: 1fr;
	}
`;
