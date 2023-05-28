import { ReactNode } from "react";

interface MenuProps {
	children?: ReactNode;
	[key: string]: unknown;
	fDirection?: "up" | "down" | "start" | "end" | "none";
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProps extends MenuProps {}

export interface MenuItemProps extends StyledProps {
	title?: string;
	url?: string;
}

export interface MenuItemType {
	id: string;
	title: string;
	url?: string;
	subMenuItem?: ReactNode;
}

export interface MenuDataType {
	id: string;
	title: string;
	url?: string;
	children?: Array<MenuDataType>;
}

export interface MenuModelType {
	id: string;
	item?: MenuSubItemComponentType;
}

export interface MenuContainerProps extends MenuProps {
	data?: Array<MenuDataType>;
	model?: Array<MenuModelType>;
}

export interface SubItemProps {
	subData?: Array<MenuDataType>;
}

type MenuSubItemComponentType = React.ComponentType<SubItemProps>;
