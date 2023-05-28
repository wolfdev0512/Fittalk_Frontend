// type
import { Tag } from "contentful";
// apollo
import { gql } from "@apollo/client";
// ---------------------------------------------------
const BLOG_FRAGMENT = gql`
	fragment BLOG_FRAGMENT on BlogsModel {
		name
		title
		slug
		description {
			json
		}
		media {
			url
			width
			height
		}
		createdAt
		contentfulMetadata {
			tags {
				name
				id
			}
		}
	}
`;
const BLOG_ITEM_FRAGMENT = gql`
	fragment BLOG_ITEM_FRAGMENT on BlogsModel {
		name
		title
		slug
		authorInfo {
			firstName
			lastName
			facebook
			twitter
			website
			avatar {
				url
			}
			about {
				json
			}
		}
		media {
			url
			width
			height
		}
		description {
			json
		}
		content {
			json
			links {
				assets {
					block {
						sys {
							id
						}
						title
						url
						width
						height
					}
				}
			}
		}
		createdAt
		contentfulMetadata {
			tags {
				name
				id
			}
		}
	}
`;

// Get 4 recent created blogs
const GET_BANNER_BLOG = gql`
	${BLOG_FRAGMENT}
	{
		blogsModelCollection(order: created_at_DESC, limit: 4) {
			items {
				...BLOG_FRAGMENT
			}
		}
	}
`;
const GET_ALL_BLOGS = gql`
	${BLOG_FRAGMENT}
	{
		blogsModelCollection(order: created_at_DESC) {
			items {
				...BLOG_FRAGMENT
			}
		}
	}
`;
const GET_BLOG_BY_SLUG = gql`
	${BLOG_ITEM_FRAGMENT}
	query getBlogBySlug($slug: String!, $category: [String]!) {
		blogsModelCollection(
			where: {
				slug_contains: $slug
				contentfulMetadata: { tags: { id_contains_all: $category } }
			}
			order: created_at_DESC
			limit: 1
		) {
			items {
				...BLOG_ITEM_FRAGMENT
			}
		}
	}
`;
const GET_BLOG_BY_TAG = gql`
	${BLOG_FRAGMENT}
	query getBlogBySlug($tag: [String]!, $limit: Int = 5) {
		blogsModelCollection(
			where: { contentfulMetadata: { tags: { id_contains_all: $tag } } }
			limit: $limit
			order: created_at_DESC
		) {
			items {
				...BLOG_FRAGMENT
			}
		}
	}
`;

const SEARCH_BLOG_BY_PARAM = gql`
	${BLOG_FRAGMENT}
	query getBlogBySearch($search: String) {
		blogsModelCollection(
			where: {
				OR: [
					{ content_contains: $search }
					{ name_contains: $search }
					{ title_contains: $search }
					{ description_contains: $search }
					{ tags_contains: $search }
					{ slug_contains: $search }
				]
				contentfulMetadata: { tags_exists: true }
			}
			order: created_at_DESC
		) {
			items {
				...BLOG_FRAGMENT
			}
		}
	}
`;

const getRecentByTag = (items: Array<Tag>, limit = 6) => {
	let query = "";
	items.forEach((item) => {
		query += ` ${item.sys.id}: blogsModelCollection(order: sys_publishedAt_DESC, limit: ${limit}, where: {media_exists: true, contentfulMetadata: {tags: {id_contains_some: ["${item.sys.id}"]}}} ) { items { ...BLOG_FRAGMENT } }`;
	});
	return gql`
  ${BLOG_FRAGMENT}
  {
    ${query}
  }
`;
};
export default {
	GET_BANNER_BLOG: GET_BANNER_BLOG,
	GET_ALL_BLOGS: GET_ALL_BLOGS,
	GET_BLOG_BY_SLUG: GET_BLOG_BY_SLUG,
	GET_BLOG_BY_TAG: GET_BLOG_BY_TAG,
	SEARCH_BLOG_BY_PARAM: SEARCH_BLOG_BY_PARAM,
	getRecentByTag: getRecentByTag,
};
