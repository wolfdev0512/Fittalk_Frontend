import dynamic from "next/dynamic";

// exports
export const MenuBarItem = dynamic(() => import("./MenuBar"));
export const SearchTopBarItem = dynamic(() => import("./SearchBar"));
