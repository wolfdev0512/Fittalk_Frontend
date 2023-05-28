import React, { useEffect } from "react";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
// sidebar View
import { MenuBarItem, SearchTopBarItem } from "views/Sidebar";
// sidebar provider
import { SideBar, TopBar, SideBarItemType } from "components/Sidebar";

import { getMenuData } from "api/modules/layout/menu.controller";
// redux
import { useAppDispatch } from "redux/store";
import { addMenuItem, setMenus } from "redux/slices/menus";

// -----------------------------------------------------------

const Layout = ({ children }) => {
	const dispatch = useAppDispatch();
	const sidebar: Array<SideBarItemType> = [
		{
			barItem: MenuBarItem,
			id: "menu",
			rWidth: "90%",
			bg: "colors.white",
		},
		{
			barItem: SearchTopBarItem,
			id: "searchMenu",
			rWidth: "100%",
			rHeight: "fit-content",
			direction: "vertical",
		},
	];

	const topbar: Array<SideBarItemType> = [];

	useEffect(() => {
		const addtionalMenuItem = {
			id: "pickup-5",
			title: "PICKUP & DELIVERY",
			children: [
				{
					id: "Click & Collect",
					title: "Click & Collect",
					url: "Track My Order",
				},
			],
		};

		getMenuData().then((_menuData) => {
			dispatch(setMenus(_menuData));
			dispatch(addMenuItem(addtionalMenuItem));
		});
	}, []);

	return (
		<TopBar.Provider items={topbar}>
			<SideBar.Provider items={sidebar}>
				<AppLayoutWrapper>
					<Header />
					{children}
					<Footer />
					<ScrollTop />
				</AppLayoutWrapper>
			</SideBar.Provider>
		</TopBar.Provider>
	);
};

export default Layout;
