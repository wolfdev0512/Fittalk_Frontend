// next
import dynamic from "next/dynamic";

export { default as Input } from "./Input";
export const SearchInput = dynamic(() => import("./SearchInput"), {
	ssr: false,
});

export type { InputProps, InputHocProps, Scales as InputScales } from "./types";
