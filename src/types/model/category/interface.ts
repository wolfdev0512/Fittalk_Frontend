// type
import { Tag } from "contentful";
import { StaticImageData } from "next/image";
import { BlogItemInterface } from "types/model/blog/interface";
// ----------------------------------------------

export interface CategroyProps {
  title: string;
  image?: StaticImageData | string;
  cateoryId: string;
}
export interface TagsType {
  items: Array<Tag>;
  total: number;
}
export interface SysType {
  id: string;
  linkType: string;
  type: string;
}
export interface RecentByTagProps {
  recentByTag?: { [key: string]: { items: Array<BlogItemInterface> } };
}
export declare type CategoryItemProps = Tag & RecentByTagProps;
