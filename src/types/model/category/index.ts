// type
import { Tag } from "contentful";

// --------------------------------------------------------
export class TagsModel {
  constructor(private node: Tag) {}
  getTagName() {
    return this.node.name;
  }
  getTagId() {
    return this.node.sys.id;
  }
  getTagImage() {
    return "";
  }
}
