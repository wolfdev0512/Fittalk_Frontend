// styled system
import styled from "styled-components";
// ---------------------------------------------
export const BlogItemWrapper = styled.div`
	padding-right: 10px;
	max-width: 394px;

	${({ theme }) => theme.mediaQueries.md} {
		max-width: 360px;
	}

	${({ theme }) => theme.mediaQueries.xs} {
		padding-bottom: 0px;
		max-width: 310px;
	}

	${({ theme }) => theme.mediaQueries.xxs} {
		max-width: 280px;
	}
`;
