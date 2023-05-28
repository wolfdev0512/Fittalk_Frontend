// system component
import styled from "styled-components";

// -----------------------------------------
export const SearchViewWrapper = styled.div`
	padding: 15px 0;
	${({ theme }) => theme.mediaQueries.xxs} {
		padding: 25px 0 0;
	}
`;
