import dynamic from "next/dynamic";
// exports
export const CopyRightView = dynamic(() => import("./CopyRightSection"));
export const LinkView = dynamic(() => import("./LinkSection"));
export const ConnectView = dynamic(() => import("./ConnectSection"));
export const PartnerView = dynamic(() => import("./PartnerSection"));
export const SignUpView = dynamic(() => import("./SignUpSection"));
export const SocialView = dynamic(() => import("./SocialSection"));
