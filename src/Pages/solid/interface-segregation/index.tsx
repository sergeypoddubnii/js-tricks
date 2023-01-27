import React from 'react';
import Card from 'Components/card';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import CodeSyntax from '../../../Components/code-syntax';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';

const InterfaceSegregation = () => {

	return (
		<Card title='Interface segregation'>
			<p>Clients should not be forced to depend upon interfaces that they do not use</p>
			<p>React perspective: Components should not depend on things they don’t need</p>
			<p>Many client-specific interfaces are better than one general-purpose interface.</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern}/>
				<CodeSyntax code={pattern}/>
			</ComparisonCode>
		</Card>
	);
};

export default InterfaceSegregation;