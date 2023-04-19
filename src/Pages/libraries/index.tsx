import React from 'react';
import PageLayout from 'core/layout/page-layout';
import GraphqlApolloClient from './graphql-apollo-client';

const Libraries = () => {
	return (
		<PageLayout title={'Libraries'}>
			<GraphqlApolloClient/>
		</PageLayout>
	);
};

export default Libraries;
