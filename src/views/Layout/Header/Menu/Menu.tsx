import React from "react";
// components
import { MenuContainer } from "components/Menu";
import { BrandItem, CategoryItem, PickupItem } from "./SubMenu";
import { RootState } from "redux/rootReducer";
import { useAppSelector } from "redux/store";

// ------------------------------------------------

const Menu = () => {
	const { menuList } = useAppSelector((state: RootState) => state.menus);

	const model = [
		{
			id: "categories-0",
			item: CategoryItem,
		},
		{
			id: "brands-1",
			item: BrandItem,
		},
		{
			id: "pickup-5",
			item: PickupItem,
			unWrapped: true,
		},
	];
	// const model = [
	//   {
	//     id: "categories-0",
	//     item: CategoryItem,
	//   },
	//   {
	//     id: "brands-1",
	//     item: BrandItem,
	//   },
	// ];

	return <MenuContainer data={menuList} model={model} />;
};
export default Menu;
