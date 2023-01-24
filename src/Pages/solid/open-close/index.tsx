import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import codeAntiPattern from './anti-pattern.json';
import codePattern from './pattern.json';

const OpenClose = () => {
	return (
		<Card title='Open Close'>
			<p>Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.</p>
			<CodeSyntax code={codeAntiPattern} />
			<CodeSyntax code={codePattern} />
		</Card>
	);
};

export default OpenClose;
