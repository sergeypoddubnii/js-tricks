import React, {FC} from 'react';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import CodeSyntax from '../../../Components/code-syntax';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';
import Section from 'Components/containers/section';

interface IProps {
	hashId: string;
}

const DependencyInversion:FC<IProps> = ({hashId}:IProps) => {
	return (
		<Section title='Dependency Inversion Principle' hashId={hashId}>
			<p>Always have high-level code interface with an abstraction, rather than an implementation detail</p>
			<p>React perspective: No component or function should care about how a particular thing is done.</p>
			<p>In most cases, if you are violating the single-responsibility principle, then you might also be violating the dependency inversion principle</p>
			<p>For any component, look into the import section at the top. If you are importing some library that’s not responsible for displaying something (e.g. a toast or modal), then you might be violating the principle</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>
		</Section>
	);
};

export default DependencyInversion;
