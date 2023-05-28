// ------------------------------------------------------
export interface BlogItemProps {
	itemData: any;
	mode?: "views" | "recent" | "linkitem";
}
export interface TagInterface {
	name: string;
	id: string;
}
// ------------------------------------------------------
export interface BlogItemInterface {
	name: string;
	title: string;
	badgeColor?: string;
	slug: string;
	contentfulMetadata: {
		tags: Array<TagInterface>;
	};
	authorInfo: {
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
	};
	media: {
		url: string;
		width: string;
		height: string;
	};
	description: {
		json: any;
	};
	content: {
		json: any;
		links: any;
	};
	createdAt: string;
	loading?: boolean;
}
export interface BlogListProps {
	popularList: Array<any>;
	recentList: Array<any>;
}
