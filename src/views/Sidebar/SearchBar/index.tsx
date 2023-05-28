import React from "react";
// component
import { SearchInput } from "components/Input";
// styled component
import { SearchBarWrapper } from "./SearchBar.style";

// ----------------------------------------------------------

export default function index() {
	return (
		<SearchBarWrapper>
			<SearchInput mode="sideSearch"></SearchInput>
		</SearchBarWrapper>
	);
}
