import React from 'react';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import CodeSyntax from '../../../Components/code-syntax';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';

const InterfaceSegregation = () => {
	return (
		<>
			<p>Clients should not be forced to depend upon interfaces that they do not use</p>
			<p>React perspective: Components should not depend on things they don’t need</p>
			<p>Many client-specific interfaces are better than one general-purpose interface.</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>
		</>
	);
};

export default InterfaceSegregation;
