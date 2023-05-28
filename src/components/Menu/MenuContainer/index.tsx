import React, { useMemo } from "react";
// type
import { MenuContainerProps, MenuItemType } from "../types";
import { MenuItem } from "components/Menu";
// styled components
import { MenuContainerWrapper } from "./MenuContainer.style";

// --------------------------------------------------------------

const MenuContainer: React.FC<MenuContainerProps> = ({
	data = [],
	model = [],
	fDirection = "none",
}) => {
	const _combinedData = useMemo<Array<MenuItemType>>(() => {
		return data.map((item) => {
			const _matchedItem = model.find((_model) => _model.id == item.id);

			if (_matchedItem) {
				const SubMenuItemInstance = _matchedItem.item;
				if (!SubMenuItemInstance) {
					return { ...item, unWrapped: _matchedItem.unWrapped };
				}
				return {
					...item,
					unWrapped: _matchedItem.unWrapped,
					subMenuItem: <SubMenuItemInstance subData={item.children} />,
				};
			}
			return item;
		});
	}, [data, model]);

	return (
		<MenuContainerWrapper>
			{_combinedData.map((item: MenuItemType, index) => (
				<MenuItem
					fDirection={fDirection}
					title={item.title}
					unWrapped={item.unWrapped}
					key={`menu-item-${index}`}
					url={item.url}
				>
					{item?.subMenuItem ?? undefined}
				</MenuItem>
			))}
		</MenuContainerWrapper>
	);
};
export default MenuContainer;
