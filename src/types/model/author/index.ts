// helper
import { _returnHtmlFromRichText } from "utils/helper-string";

// ------------------------------------------------------
export interface AuthorInfoInterface {
	avatar: {
		url: string;
	};
	facebook?: string;
	twitter?: string;
	website?: string;
	firstName: string;
	lastName: string;
	about: {
		json: any;
	};
}

// --------------------------------------------------------
export class AuthorModel {
	constructor(private node: AuthorInfoInterface) {}

	getAuthorName() {
		return this.node?.firstName ?? "";
	}
	getAuthorFullName() {
		return this.node?.firstName + " " + this.node.lastName;
	}
	getAuthorDescription() {
		return this.node?.about;
	}

	getAuthorDescriptionAsText() {
		return _returnHtmlFromRichText(this.node?.about?.json);
	}
	getAvatar() {
		return this?.node?.avatar?.url ?? "";
	}
	getAuthorUrls() {
		return {
			Facebook: this.node?.facebook ?? "",
			Twitter: this.node?.twitter ?? "",
			WebSite: this.node?.website ?? "",
		};
	}

	getOrgin() {
		return this.node;
	}
}
