import React from 'react';
import Card from '../../../Components/Card';
import CodeSyntax from '../../../Components/code-syntax';
import codeExample from './code-example.json';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<h3>Switch Event body</h3>
			<CodeSyntax code={codeExample} />
		</Card>
	</>;
};

export default SwitchEvent;
