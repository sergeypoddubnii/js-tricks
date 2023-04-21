import React from 'react';
import Section from 'Components/section';
import ReferenceList from 'Components/reference/reference-list';
import CodeSyntax from 'Components/code-syntax';

const references = [
	'https://graphql.org/learn/queries/',
	'https://www.apollographql.com/docs/react/data/queries',
];

const GraphqlApolloClient = () => {
	return (
		<Section title={'GraphQL Apollo Client'}>
			<p>Example with REST Request to graphQL server</p>
			<CodeSyntax code={'const query = `query Todos {\n  todos {\n    data{\n      id\n      title\n      completed\n    }\n  }\n}`; // gql schema\n\nconst url = "https://graphqlzero.almansi.me/api"; //url to graphQL\n\nconst data = {\n  method: "POST", // ALL requests(query, mutations) to GraphQL server use POST\n  headers: {\n    "Content-type": "aplication/json"\n  },\n  body: JSON.stringify({ query: query }) // always use query even for mutation\n};\n\nfetch(url, data)\n  .then((response) => response.json())\n  .then((todos) => console.log("todos", todos))\n  .catch((error) => console.error(error));\n'}/>
			<ReferenceList references={references}/>
		</Section>
	);
};

export default GraphqlApolloClient;
