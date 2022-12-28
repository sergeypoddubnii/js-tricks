import React from 'react';
import Card from '../../../Components/Card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codeExample from './code-example.json';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<h3>Switch Event body</h3>
			<SyntaxHighlighter language="javascript" style={docco}>
				{codeExample}
			</SyntaxHighlighter>
		</Card>
	</>;
};

export default SwitchEvent;
