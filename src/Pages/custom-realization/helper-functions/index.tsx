import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import functions from './functions.json';

const HelperFunctions = () => {
	return (
		<Card title='Helper functions'>
			<CodeSyntax code={functions.debounce}/>
		</Card>
	);
};

export default HelperFunctions;
