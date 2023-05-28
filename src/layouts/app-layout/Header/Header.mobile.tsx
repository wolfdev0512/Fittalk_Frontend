import React, { useState } from "react";
// components
import { Row } from "components/Layout";
import { Image } from "components/Image";
import { useInputHOC } from "components/hoc";
// hook
import { useRouter, useSideBar } from "hooks";
// HOC
import { useLinkItem } from "components/hoc";
// assets
import { MenuIcon, SearchIcon } from "assets/icon";
import { IoClose } from "react-icons/io5";
import LogoImage from "assets/images/layout/Logo.svg";
// ----------------------------------------------
// styled component
import {
	MobileMenuItem,
	LogoMWrapper,
	SideBarWrapper,
	SearchSideBarContainer,
	InputInner,
} from "./Header.style";

// -------------------------------------------------------------------
const MenuItem = useLinkItem(MobileMenuItem, "icon");
const SideBarInput = useInputHOC(SearchSideBarContainer);

const MobileHeader = () => {
	const { move } = useRouter();
	const { currentTopBar, openBar } = useSideBar();
	const [openedSearchBox, setOpenedSearchBox] = useState(false);
	return (
		<Row
			justifyContent="space-between"
			alignItems="center"
			className="mobileWrapper"
		>
			<MenuItem
				icon={currentTopBar === "menu" ? <IoClose size={30} /> : <MenuIcon />}
				handleClick={() => {
					openBar("menu");
				}}
			></MenuItem>
			<LogoMWrapper>
				<Image
					src={LogoImage}
					height={68}
					width={135}
					onClick={() => move("/")}
				/>
			</LogoMWrapper>
			<MenuItem
				icon={
					currentTopBar === "search" ? (
						<IoClose size={30} />
					) : (
						<SearchIcon iColor="#1A1818" iSize={{ x: 22, y: 22 }} />
					)
				}
				handleClick={() => {
					setOpenedSearchBox(!openedSearchBox);
				}}
			></MenuItem>
			{/* <MenuItem
				icon={
					currentTopBar === "cart" ? (
						<IoClose size={30} />
					) : (
						<CartIcon iSize={{ x: 28, y: 25 }} />
					)
				}
				// handleClick={() => {}}
			></MenuItem> */}
			<SideBarWrapper opened={openedSearchBox}>
				<Row alignItems="center" gap={20}>
					<InputInner>
						<SideBarInput
							inputIcon={
								<SearchIcon
									iColor="#1A1818"
									iSize={{ x: 19, y: 19 }}
									stockWidth={2}
								/>
							}
							iconDirection="row-reverse"
							iColor="gray"
							iSize="medium"
							iFont="normal"
							placeholder="Search... "
							onClick={() => {
								openBar("searchMenu");
							}}
						/>
					</InputInner>
					<IoClose
						size={30}
						onClick={() => {
							setOpenedSearchBox(!openedSearchBox);
						}}
					/>
				</Row>
			</SideBarWrapper>
		</Row>
	);
};
export default MobileHeader;
