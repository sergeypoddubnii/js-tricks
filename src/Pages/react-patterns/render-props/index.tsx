import React from 'react';
import Card from 'Components/card';
import code from './pattern.json';
import CodeSyntax from 'Components/code-syntax';

const RenderProps = () => {
	return (
		<Card title='Render props'>
			<h3>Switch Event</h3>
			<CodeSyntax code={code}/>
		</Card>
	);
};

export default RenderProps;
