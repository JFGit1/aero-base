import { gql } from '@apollo/client';

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
