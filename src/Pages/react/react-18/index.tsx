import React from 'react';
import Card from 'Components/card';
import codeExample from './react-18-code-example.json';
import CodeSyntax from 'Components/code-syntax';

const React18 = () => {
	return (
		<Card title='React v18'>
			<h6>Automatic Batching</h6>
			<p>Batching is when React groups multiple state updates into a single re-render for better performance</p>
			<CodeSyntax code={codeExample.automaticBatching} />
			<h6>A transition is a new concept in React to distinguish between urgent and non-urgent updates.</h6>
			<p>A transition is a new concept in React to distinguish between urgent and non-urgent updates.</p>
			<CodeSyntax code={codeExample.transition} />
		</Card>
	);
};

export default React18;
