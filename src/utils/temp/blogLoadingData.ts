// --------------------------------------------------------------------
import { BlogItemInterface } from "types/model/blog/interface";

const tempBlog: BlogItemInterface = {
	title: "",
	authorInfo: {
		avatar: { url: "" },
		firstName: "",
		lastName: "",
		about: { json: "" },
	},
	content: { json: "", links: "" },
	contentfulMetadata: { tags: [] },
	createdAt: "",
	description: { json: "" },
	media: { url: "", height: "", width: "" },
	name: "",
	slug: "",
	badgeColor: "",
};
const blogLoadingData = [
	{
		category: "Training",
		categoryId: "training",
		categoryData: [...new Array(5).map(() => tempBlog)],
	},
	{
		category: "Lifestyle",
		categoryId: "lifestyle",
		categoryData: [...new Array(5).map(() => tempBlog)],
	},
	{
		category: "Nutrition",
		categoryId: "nutrition",
		categoryData: [...new Array(5).map(() => tempBlog)],
	},
	{
		category: "Gainmuscle",
		categoryId: "gainmuscle",
		categoryData: [...new Array(5).map(() => tempBlog)],
	},
	{
		category: "Supplemnets",
		categoryId: "supplemnets",
		categoryData: [...new Array(5).map(() => tempBlog)],
	},
];

const searchblogLoadingData = [
	{
		category: "",
		categoryId: "",
		categoryData: [...new Array(12).map(() => tempBlog)],
	},
];
export default {
	blogsData: blogLoadingData,
	searchData: searchblogLoadingData,
};
