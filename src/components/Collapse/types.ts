import { ReactNode } from "react";
// ---------------------------------
export interface CollapeBoxProps {
	hide: boolean;
}
export interface CollapseWrapperProps extends AccordionProps {
	handleOpen: () => void;
	hide: boolean;
}
export interface AccordionProps extends Omit<AccordionType, "children"> {
	handleOpen: (current: string) => void;
	aId: string;
	current?: string;
	children: ReactNode;
}
export interface AccordionType {
	title: string;
	param?: string;
	data?: any;
	children?: Array<AccordionType>;
}
export interface CollapeContainerProps {
	items: Array<AccordionType>;
	deep?: number;
}
