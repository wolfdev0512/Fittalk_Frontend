/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useMemo } from "react";

// redux
import { RootState, useAppSelector } from "redux/store";
// feature
import BlogViewItem from "widgets/BlogView";
// styled component
import { BlogViewWrapper, FeaturedWrapper } from "./BlogView.style";
import { BlogVertical } from "widgets/BlogItem";
// ----------------------------------------------------

const BlogView = ({ recentByTag }) => {
	const { taglist } = useAppSelector((state: RootState) => state.tags);

	const blogData = useMemo(
		() =>
			taglist.map((item) => {
				return {
					category: item.name,
					categoryId: item.sys.id,
					categoryData: recentByTag[item.sys.id]?.items?.slice(1, 6) ?? [],
				};
			}),
		[taglist, recentByTag]
	);

	const featuredBlogs = useMemo(
		() =>
			taglist
				.map((item) => {
					return recentByTag[item.sys.id]?.items[0] ?? null;
				})
				.filter(Boolean),
		[taglist, recentByTag]
	);

	return (
		<BlogViewWrapper>
			{/* @ts-ignore */}
			{blogData.map((item, index) => {
				if (index == 0) {
					return (
						<React.Fragment key={`blogViewItem_${index}`}>
							<BlogViewItem
								category={item.category}
								categoryId={item.categoryId}
								categoryData={item.categoryData}
							/>
							<FeaturedWrapper>
								{featuredBlogs.map((is, itx) => {
									return (
										<BlogVertical itemData={is} key={`blogVertical_${itx}`} />
									);
								})}
							</FeaturedWrapper>
						</React.Fragment>
					);
				}
				return item.categoryData?.length ?? 0 > 0 ? (
					<BlogViewItem
						category={item.category}
						categoryId={item.categoryId}
						categoryData={item.categoryData}
						key={`blogViewItem_${index}`}
					/>
				) : (
					<React.Fragment key={`blogViewItem_${index}`}></React.Fragment>
				);
			})}
		</BlogViewWrapper>
	);
};

const MemorizedBlogView = React.memo(BlogView);
export default MemorizedBlogView;
