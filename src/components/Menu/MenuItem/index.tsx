import React from "react";
// hook
import { useRouter } from "hooks";

// styled components
import {
	MenuItemWrapper,
	ItemConatiner,
	UnContainedItem,
} from "./MenuItem.style";
// type
import { MenuItemProps } from "../types";
import { Text } from "components/Text";

// --------------------------------------------------------------

const MenuItem: React.FC<MenuItemProps> = ({
	title = "",
	url = "",
	fDirection = "none",
	unWrapped = false,
	children,
}) => {
	const { move } = useRouter();
	const handleOnClick = () => {
		if (url != "") move(url);
	};

	const ContainerWrapper = unWrapped ? UnContainedItem : ItemConatiner;

	return (
		<MenuItemWrapper fDirection={fDirection}>
			<Text
				fontSize={14}
				fontWeight={700}
				color="white"
				fontFamily="inter"
				textTransform="uppercase"
				p="15px 20px"
				className="menuTitle"
				onClick={() => handleOnClick()}
			>
				{title}
			</Text>
			<ContainerWrapper className="itemContainer">{children}</ContainerWrapper>
		</MenuItemWrapper>
	);
};
export default MenuItem;
