import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import antiPattern from './anti-pattern.json';
import pattern from './pattern.json';

const OpenClose = () => {
	return (
		<Card title='Open Close'>
			<p>Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>

		</Card>
	);
};

export default OpenClose;
