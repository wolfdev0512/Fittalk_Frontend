// types
import { ComponentType, HTMLAttributes } from "react";

// --------------------------------------------------

export interface WithContainerProps extends ContainerWithWrapperProps {
	SectionView: ComponentType<any>;
	mode?: "noWrapper" | "container" | "wrapper" | "none";
	mWidth?: number;
	[key: string]: any;
}

export interface ContainerWithWrapperProps
	extends HTMLAttributes<HTMLDivElement> {
	mWidth?: number;
	cColor?: string;
}
