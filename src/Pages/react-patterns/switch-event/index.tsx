import React from 'react';
import Card from '../../../Components/Card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SwitchEvent = () => {
	return <>
		<Card title='Switch Event'>
			<h3>Switch Event body</h3>
			<SyntaxHighlighter language="javascript" style={docco}>
				{'(num) => num + 1'}
			</SyntaxHighlighter>
		</Card>
	</>;
};

export default SwitchEvent;
