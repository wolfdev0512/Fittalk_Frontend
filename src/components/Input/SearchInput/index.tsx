import React, { useEffect, useState } from "react";
import { FastSimonSDK, Product } from "fast-simon-sdk";
import SearchResult from "widgets/SearchResult";
import {
	PopularSearch,
	FastCategory,
} from "fast-simon-sdk/lib/models/autocomplete";
// hooks
import { useRouter } from "hooks";
import { useSideBar } from "hooks";
// component
import { useInputHOC } from "components/hoc";
// assets
import { SearchIcon } from "assets/icon";
import { IoCloseOutline } from "react-icons/io5";
// styled component
import {
	InputWrapper,
	InputInner,
	SearchButtonContainer,
	SearchSideBarContainer,
	SideModeSearchInner,
	SearchIconWrapper,
} from "./SearchInput.style";
// -----------------------------------------------------------
interface SearchInputType {
	mode?: "normal" | "sideSearch";
}
const Input = useInputHOC(SearchButtonContainer);
const SideBarInput = useInputHOC(SearchSideBarContainer);

const SearchInput = ({ mode = "normal" }: SearchInputType) => {
	const [simonReady, setSimonReady] = useState(false);
	const [categories, setCategories] = useState<Array<FastCategory>>([]);
	const [popularSearches, setPopularSearches] = useState<Array<PopularSearch>>(
		[]
	);
	const [products, setProducts] = useState<Array<Product>>([]);
	const [query, SetQuery] = useState("");
	const [searchText, SetSearchText] = useState("");
	const { move } = useRouter();
	const { closeBar } = useSideBar();

	useEffect(() => {
		let isMounted = true;

		setTimeout(() => {
			if (isMounted) {
				FastSimonSDK.initialization({
					storeID: 61363421411, // store-id,
					uuid: "b15131e4-3a78-47dc-96a2-dfc000961938", // uuid
					type: "SPA", // multi page application ("MPA") or single page application("SPA") (for reporting)
					onReady: () => {
						setSimonReady(true);
					},
				});
			}
		}, 2000);
		return () => {
			isMounted = false;
		};
	}, []);

	const handleSearch = (e) => {
		SetSearchText(e.target.value);
		if (simonReady) {
			FastSimonSDK.instantSearch({
				query: e.target.value,
				callback: (response) => {
					setCategories(response.payload?.categories ?? []);
					setPopularSearches(response.payload.popularSearches);
					setProducts(response.payload.products);
					SetQuery(response.payload.query);
				},
			});
		}
	};

	return (
		<>
			{mode === "normal" && (
				<InputWrapper>
					<InputInner>
						<Input
							inputIcon={
								<SearchIcon
									iColor="#1A1818"
									iSize={{ x: 15, y: 15 }}
									onClick={() => {
										move(`/search?q=${searchText}`);
									}}
								/>
							}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									move(`/search?q=${searchText}`);
								}
							}}
							placeholder="Search over 10,000 products... "
							onChange={(e) => handleSearch(e)}
							value={searchText}
						/>
					</InputInner>

					<SearchResult
						categories={categories}
						popularSearches={popularSearches}
						products={products}
						query={query}
					/>
				</InputWrapper>
			)}
			{mode === "sideSearch" && (
				<>
					<SideModeSearchInner>
						<SearchIconWrapper>
							<SearchIcon
								iColor="#A3A6AC"
								iSize={{ x: 20, y: 20 }}
								stockWidth={2.5}
								onClick={() => {
									move(`/search?q=${searchText}`);
									closeBar();
								}}
							/>
						</SearchIconWrapper>
						<SideBarInput
							inputIcon={
								<IoCloseOutline
									size={30}
									onClick={() => {
										closeBar();
									}}
								/>
							}
							iColor="noStyle"
							iSize="medium"
							iFont="big"
							placeholder="Search... "
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									move(`/search?q=${searchText}`);
									closeBar();
								}
							}}
							onChange={(e) => handleSearch(e)}
							value={searchText}
						/>
					</SideModeSearchInner>
					<SearchResult
						categories={categories}
						popularSearches={popularSearches}
						products={products}
						query={query}
					/>
				</>
			)}
		</>
	);
};
export default SearchInput;
