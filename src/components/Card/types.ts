import { StaticImageData } from "next/image";
import { BadgeContainerProps } from "components/Badge";
import { BlogItemInterface } from "types/model/blog/interface";
// ---------------------------------------------------

export interface ProductCardProps extends BadgeContainerProps {
	productImage?: StaticImageData | string;
	title?: string;
	desc?: string;
	price?: string;
	rate?: number;
	prePrice?: string;
	mode?: "product" | "viewAll";
	productWidth?: number;
	productHeight?: number;
}

export interface BlogViewItemProps {
	category: string;
	categoryId: string;
	categoryData: Array<BlogItemInterface>;
	mode?: "all" | "byCategory";
	loading?: boolean;
}
