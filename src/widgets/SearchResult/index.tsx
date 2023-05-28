import React from "react";
import { Product } from "fast-simon-sdk";
import {
	PopularSearch,
	FastCategory,
} from "fast-simon-sdk/lib/models/autocomplete";
// hook
import { useRouter } from "hooks";
// component
import { Row } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Hidden } from "components/Hidden";
// utils
import { makeBlodSearched } from "utils/helper-search";
// resource
import SearchBanner from "assets/images/temp/banner.webp";
import { VscSearch } from "react-icons/vsc";
import { BsTags } from "react-icons/bs";

// styled component
import {
	SearchResultWrapper,
	SearchCategory,
	CategoryItemWrapper,
	ItemImageContainer,
	ItemBanner,
	SearchLink,
} from "./SearchResult.style";
import { BREAKPOINTS } from "theme/base";

// -------------------------------------------------
interface SearchResultProps {
	categories: Array<FastCategory>;
	popularSearches: Array<PopularSearch>;
	products: Array<Product>;
	query: string;
}
const { md } = BREAKPOINTS;

const SearchResult: React.FC<SearchResultProps> = ({
	categories = [],
	popularSearches = [],
	products = [],
	query = "",
}) => {
	const { move } = useRouter();

	return (
		<>
			{categories.length > 0 &&
				products.length > 0 &&
				popularSearches.length > 0 && (
					<SearchResultWrapper className="searchResultWrapper noscroll">
						{categories.length > 0 && (
							<>
								<SearchCategory>
									<Text
										p="4px 4px 4px 10px"
										color="white"
										fontSize={12}
										fontWeight={800}
										textTransform="uppercase"
										style={{ letterSpacing: 0.5 }}
									>
										CATEGORIES
									</Text>
								</SearchCategory>
								<Row
									flexDirection="column"
									className="contentWrapper"
									padding="0 0 5px 0"
								>
									{categories.map((item, index) => (
										<CategoryItemWrapper
											key={`categories_${index}`}
											onClick={() => {
												move("https://www.nutritionwarehouse.com.au/" + item.u);
											}}
										>
											<Hidden wHide={[md]}>
												<ItemImageContainer height={13}>
													{item.t.includes("missing") ? (
														<BsTags size={16} />
													) : (
														<Image
															src={item.t}
															mode="fill"
															oFit="contain"
														></Image>
													)}
												</ItemImageContainer>
											</Hidden>
											<Text
												padding="0 10px"
												fontSize={12}
												fontWeight={700}
												fontFamily="inter"
												color="#666"
												className="categoryItem"
											>
												{item.l}
											</Text>
										</CategoryItemWrapper>
									))}
								</Row>
							</>
						)}
						{products.length > 0 && (
							<>
								<SearchCategory>
									<Text
										padding="4px 4px 4px 10px"
										color="white"
										fontSize={12}
										fontWeight={800}
										style={{ letterSpacing: 0.5 }}
										textTransform="uppercase"
									>
										Products
									</Text>
								</SearchCategory>
								<Row
									flexDirection="column"
									className="contentWrapper"
									padding="0 0 5px 0"
								>
									{products.map((item, index) => (
										<CategoryItemWrapper
											key={`product_${index}`}
											onClick={() => {
												move("https://www.nutritionwarehouse.com.au/" + item.u);
											}}
										>
											<ItemImageContainer>
												<Image src={item.t} mode="fill" oFit="contain"></Image>
											</ItemImageContainer>
											<Row flexDirection="column" padding="0 10px">
												<Text
													fontSize={12}
													fontFamily="inter"
													color="#666"
													className="productItem"
													fontWeight={[400, 400, 400, 700]}
												>
													{item.l}
												</Text>
												<Text fontFamily="inter" color="#666">
													<Text
														as="span"
														fontFamily="inter"
														color="#333"
														fontWeight={[400, 400, 400, 600]}
													>
														${item.p}
													</Text>
													<Text
														as="span"
														tDecorations="line-through"
														fontWeight={400}
														fontFamily="inter"
													>
														${item.p_c}
													</Text>
												</Text>
											</Row>
										</CategoryItemWrapper>
									))}
								</Row>
							</>
						)}
						{popularSearches.length > 0 && (
							<>
								<SearchCategory>
									<Text
										padding="4px 4px 4px 10px"
										color="white"
										fontSize={12}
										fontWeight={800}
										style={{ letterSpacing: 0.5 }}
										textTransform="uppercase"
									>
										Popular Searches
									</Text>
								</SearchCategory>
								<Row
									flexDirection="column"
									className="contentWrapper"
									padding="0 0 5px 0"
								>
									{popularSearches.map((item, index) => (
										<CategoryItemWrapper
											padding="5px 10px"
											key={`search_${index}`}
											onClick={() => {
												move(
													`https://www.nutritionwarehouse.com.au/pages/search-results?q=${item.label}`
												);
											}}
										>
											<ItemImageContainer height={13} width={40}>
												<VscSearch />
											</ItemImageContainer>
											<Text
												padding="0 10px"
												fontWeight={400}
												fontFamily="inter"
												className="searchItem"
											>
												{makeBlodSearched(item.label, query)}
											</Text>
										</CategoryItemWrapper>
									))}
								</Row>
							</>
						)}
						{(categories.length > 0 ||
							products.length > 0 ||
							popularSearches.length > 0) && (
							<>
								<ItemBanner>
									<Image src={SearchBanner} mode="fill" oFit="cover"></Image>
								</ItemBanner>
								<SearchLink
									onClick={() => {
										move(
											`https://www.nutritionwarehouse.com.au/pages/search-results?q=${query}`
										);
									}}
								>
									<Text
										fontSize={12}
										fontWeight={600}
										fontFamily="inter"
										color="#111"
										tDecorations="underline"
										pointered
									>
										{`Show all results for: "${query}"`}
									</Text>
								</SearchLink>
							</>
						)}
					</SearchResultWrapper>
				)}
		</>
	);
};
export default SearchResult;
