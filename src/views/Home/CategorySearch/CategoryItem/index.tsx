import React from "react";
// hook
import { useRouter } from "hooks";
// type
import { Tag } from "contentful";
import { TagsModel } from "types/model/category";
// styled component
import { ItemWrapper } from "./CategoryItem.style";
// ---------------------------------------------------
const CategoryItem: React.FC<Tag> = (data) => {
	const item = new TagsModel(data);
	const { move } = useRouter();
	return (
		<ItemWrapper onClick={() => move("/", { tag: item.getTagId() }, true)}>
			{item.getTagName()}
		</ItemWrapper>
	);
};
export default CategoryItem;
