import { createSlice } from "@reduxjs/toolkit";
import { MenuDataType } from "components/Menu";

type MenuState = {
	menuList: Array<MenuDataType>;
};

const initialState: MenuState = {
	menuList: [],
};

export const menusSlice = createSlice({
	name: "menus",
	initialState,
	reducers: {
		setMenus(state, action: { payload: Array<MenuDataType> }) {
			state.menuList = action.payload;
		},
		addMenuItem(state, action: { payload: MenuDataType }) {
			state.menuList = [...state.menuList, action.payload];
		},
	},
});

// Reducer
export default menusSlice.reducer;

// Actions
export const { setMenus, addMenuItem } = menusSlice.actions;
