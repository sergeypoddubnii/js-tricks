import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import pattern from './pattern.json';
import antiPattern from './anti-pattern.json';
import './styles.scss';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';

const SwitchEvent = () => {
	return (
		<Card title='Switch Event'>
			<p>
				Switch event pattern makes one handle function usable for all events in React component. In this way we remove extra code. Its usable when component has a lot of similar events.
			</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>
		</Card>
	);
};

export default SwitchEvent;
