import React from 'react';
import Section from 'Components/section';
import ReferenceList from 'Components/reference/reference-list';

const references = [
	'https://graphql.org/learn/queries/',
	'https://www.apollographql.com/docs/react/data/queries',

];

const GraphqlApolloClient = () => {
	return (
		<Section title={'GraphQL Apollo Client'}>
			<ReferenceList references={references}/>
		</Section>
	);
};

export default GraphqlApolloClient;
