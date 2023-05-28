import dynamic from "next/dynamic";

// dynamic exports
export const BlogContentView = dynamic(() => import("./BlogContent"));
export const RelatedProductView = dynamic(() => import("./RelatedProduct"));
export const FitTalkView = dynamic(() => import("./FitTalk"));
