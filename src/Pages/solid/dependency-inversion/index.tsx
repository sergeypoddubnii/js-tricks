import React from 'react';
import Card from 'Components/containers/card';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import CodeSyntax from '../../../Components/code-syntax';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';
import LinkHash from 'Components/navigation-hash/link-hash';

const DependencyInversion = () => {

	return (
		<>
			<Card title='Dependency inversion'>
				<p>Always have high-level code interface with an abstraction, rather than an implementation detail</p>
				<p>React perspective: No component or function should care about how a particular thing is done.</p>
				<p>In most cases, if you are violating the single-responsibility principle, then you might also be violating the dependency inversion principle</p>
				<p>For any component, look into the import section at the top. If you are importing some library that’s not responsible for displaying something (e.g. a toast or modal), then you might be violating the principle</p>
				<ComparisonCode>
					<CodeSyntax code={antiPattern} title='anti-pattern'/>
					<CodeSyntax code={pattern} title='pattern'/>
				</ComparisonCode>
			</Card>
			<LinkHash to={'#hello'}  text='HELLOOOOOOOOO'/>
		</>
	);
};

export default DependencyInversion;
