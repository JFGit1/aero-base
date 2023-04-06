import { gql } from '@apollo/client';

export const MAIN_MENU = gql`
	query MainMenu {
		menu(id: "2", idType: DATABASE_ID) {
			menuItems(where: { parentId: "0" }) {
				nodes {
					uri
					label
					id
					childItems {
						nodes {
							label
							uri
							id
						}
					}
				}
			}
		}
	}
`;

export const PAGES_BY_SLUG = gql`
	query PageByIdQuery($id: ID!) {
		page(idType: URI, id: $id) {
			title
			content
		}
	}
`;

export const PROJECT_PAGE = gql`
	query Project($id: Int = 301) {
		projects(where: { id: $id }) {
			nodes {
				title
				slug
				id
				databaseId
				projImages {
					nodes {
						id
						title
						sourceUrl
						srcSet
						mediaDetails {
							height
							width
						}
					}
				}
			}
		}
		allSettings {
			generalSettingsUrl
		}
	}
`;

export const ALL_POSTS = gql`
	query AllPosts {
		posts(where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
			nodes {
				databaseId
				title
				slug
				excerpt
				featuredImage {
					node {
						sourceUrl
						mediaDetails {
							height
							width
						}
					}
				}
			}
		}
	}
`;
