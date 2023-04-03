import React, {FC} from 'react';
import ComparisonCode from 'Components/code-syntax/comparison-code';
import CodeSyntax from 'Components/code-syntax';
import Section from 'Components/section';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';

interface IProps {
	hashId: string;
}

const InterfaceSegregation:FC<IProps> = ({hashId}:IProps) => {
	return (
		<Section title='Interface Segregation Principle' hashId={hashId}>
			<p>Clients should not be forced to depend upon interfaces that they do not use</p>
			<p>React perspective: Components should not depend on things they don’t need</p>
			<p>Many client-specific interfaces are better than one general-purpose interface.</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>
		</Section>
	);
};

export default InterfaceSegregation;
