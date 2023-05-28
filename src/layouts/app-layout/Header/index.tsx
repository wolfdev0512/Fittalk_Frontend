import React from "react";
// components
import { Hidden } from "components/Hidden";
// views
import HeaderView from "./Header";
import MobileHeaderView from "./Header.mobile";
// styled component
import { HeaderWrapper, HeaderInner } from "./Header.style";
import { BREAKPOINTS } from "theme/base";

// --------------------------------------------------------------

const Header = () => {
	return (
		<>
			<HeaderWrapper>
				<Hidden wHide={[BREAKPOINTS.md]}>
					<HeaderView />
				</Hidden>
				<Hidden wShow={[BREAKPOINTS.md]}>
					<MobileHeaderView />
				</Hidden>
			</HeaderWrapper>
			<HeaderInner />
		</>
	);
};
export default Header;
