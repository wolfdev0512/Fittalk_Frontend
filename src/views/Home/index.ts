import dynamic from "next/dynamic";

// static exports
export { default as TrustFactorView } from "./TrustFactor";
export { default as CategoryView } from "./Category";
export {
	default as VideoMainBannerView,
	MainBannerViewWithData,
} from "./VideoMainBanner";

// dynamic exports
export const CategorySearchView = dynamic(() => import("./CategorySearch"));
export const LastBlogsView = dynamic(() => import("./LastBlogs"));
export const BlogView = dynamic(() => import("./BlogView"));
export const BlogByTagView = dynamic(() => import("./BlogView/BlogByTag"));
export const BrandView = dynamic(() => import("./Brands"));
