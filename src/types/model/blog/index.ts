// type
import { BlogItemInterface } from "./interface";
// helper
import { truncate, _returnHtmlFromRichText } from "utils/helper-string";
import { getDates, timeDifference } from "utils/helper-date";
import { isEmpty } from "utils/helper-validation";
import { AuthorModel } from "../author";

// --------------------------------------------------------
export class BlogItemModel {
	constructor(private node: BlogItemInterface) {}
	getBadgeColor() {
		return this.node?.badgeColor ?? "primary.regular";
	}
	getShortTitle(mx = 180) {
		return truncate(this.node?.title ?? "", mx);
	}
	getFullTitle() {
		return this.node?.title;
	}
	getSlug() {
		return this.node?.slug;
	}
	getName() {
		return this.node?.name;
	}
	getDescription() {
		return this.node?.description;
	}
	getDescriptionAsText() {
		return _returnHtmlFromRichText(this.node?.description.json);
	}
	getContent() {
		return this.node?.content;
	}
	getAuthourInfo() {
		return new AuthorModel(this.node?.authorInfo);
	}
	getMedia() {
		return "";
	}
	getTagName() {
		return this.node?.contentfulMetadata?.tags[0]?.name ?? "";
	}
	getTagId() {
		return this.node?.contentfulMetadata?.tags[0]?.id ?? "";
	}
	getBlogImage() {
		return this.node?.media?.url;
	}
	getBlogMedia() {
		return {
			url: this.node?.media.url,
			height: Number(this.node?.media.height),
			width: Number(this.node?.media.width),
		};
	}
	getCreatedTimeByDiff() {
		const currentTime = new Date().getTime();
		const createdTime = new Date(
			this.node?.createdAt ?? new Date().getTime()
		).getTime();
		return timeDifference(currentTime, createdTime);
	}
	getCreatedTime() {
		const empty = {
			yearfull: "",
			yearshort: "",
			quarter: "",
			monthfull: "",
			monthshort: "",
			monthfullname: "",
			monthshortname: "",
			dayfull: "",
			dayshort: "",
			datenormal: "",
			dateshortname: "",
			dateLong: "",
			timeShort: "",
			datefull: "",
			isValid: false,
		};
		if (isEmpty(this.node?.createdAt)) {
			return empty;
		}
		const created = getDates(this.node?.createdAt);
		if (created.dateLong === "Invalid date") {
			return empty;
		}
		return created;
	}
	getView() {
		return 1000;
	}
	getOrgin() {
		return this.node;
	}
}
