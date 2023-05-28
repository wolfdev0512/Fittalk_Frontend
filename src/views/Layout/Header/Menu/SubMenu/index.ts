import dynamic from "next/dynamic";
export const CategoryItem = dynamic(() => import("./CategoryItem"));
export const BrandItem = dynamic(() => import("./BrandItem"));
export const PickupItem = dynamic(() => import("./PickupItem"));
