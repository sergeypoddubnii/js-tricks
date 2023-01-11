import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import codeExample from './pattern.json';
import antiPattern from './anti-pattern.json';
import './styles.scss';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<p>
				Switch event pattern makes one handle function usable for all events in React component. In this way we remove extra code. Its usable when component has a lot of similar events.
			</p>
			<div className='switch__container'>
				<CodeSyntax code={codeExample} />
				<CodeSyntax code={antiPattern} />
			</div>
		</Card>
	</>;
};

export default SwitchEvent;
