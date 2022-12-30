import React from 'react';
import Card from '../../../Components/Card';
import CodeSyntax from '../../../Components/code-syntax';
import codeExample from './pattern.json';
import antiPattern from './anti-pattern.json';
import './styles.scss';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<h3>Switch Event</h3>
			<div className='switch__container'>
				<CodeSyntax code={codeExample} />
				<CodeSyntax code={antiPattern} />
			</div>
		</Card>
	</>;
};

export default SwitchEvent;
