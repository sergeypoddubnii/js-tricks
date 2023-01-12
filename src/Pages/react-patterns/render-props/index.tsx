import React from 'react';
import Card from 'Components/card';
import code from './pattern.json';
import CodeSyntax from 'Components/code-syntax';

const RenderProps = () => {
	return (
		<Card title='Render props'>
			<p>Sharing logic and data among several components is easy with the render props pattern. Components can be made very reusable, by using a render or children prop.</p>
			<CodeSyntax code={code}/>
		</Card>
	);
};

export default RenderProps;
