import React, { useMemo } from "react";
// type
import { TagsModel } from "types/model/category";
import { BlogItemModel } from "types/model/blog";
import { CategoryItemProps } from "types/model/category/interface";
// component
import { Text } from "components/Text";
import { Image } from "components/Image";
// hook
import { useRouter } from "hooks";
// styled component
import { ItemWrapper, TextWrapper } from "./CategoryItem.style";

// ---------------------------------------------------

const CategoryItem: React.FC<CategoryItemProps> = ({
	recentByTag,
	...data
}) => {
	const { move } = useRouter();

	const item = useMemo(() => new TagsModel(data), [data]);

	const tagImage = useMemo(() => {
		if (recentByTag) {
			const recentBlogItem = new BlogItemModel(
				recentByTag[item.getTagId()].items[0]
			);
			return recentBlogItem.getBlogImage();
		}
		return "";
	}, [recentByTag]);

	return (
		<ItemWrapper onClick={() => move("/", { tag: item.getTagId() })}>
			<TextWrapper>
				<Text
					fontSize={20}
					fontWeight={900}
					color="white"
					textTransform="uppercase"
				>
					{item.getTagName()}
				</Text>
			</TextWrapper>
			{tagImage && (
				<Image
					src={tagImage}
					width={293}
					height={130}
					mode="fill"
					oFit="cover"
				></Image>
			)}
		</ItemWrapper>
	);
};
export default CategoryItem;
