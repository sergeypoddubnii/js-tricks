import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import functions from './functions.json';

const HelperFunctions = () => {
	return (
		<Card title='Helper functions'>
			<h6>Debounce</h6>
			<CodeSyntax code={functions.debounce}/>
			<h6>Memoize function</h6>
			<CodeSyntax code={functions.memoize}/>
		</Card>
	);
};

export default HelperFunctions;
