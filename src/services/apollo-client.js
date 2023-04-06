import { ApolloClient, InMemoryCache } from '@apollo/client';

const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'network-only',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'network-only',
		errorPolicy: 'all',
	},
};

const apolloClient = new ApolloClient({
	uri: 'https://forell-lab.amzb.securityserve.com/graphql',
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export default apolloClient;
