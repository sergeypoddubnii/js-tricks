import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
	code: string;
}

const CodeSyntax:FC<IProps> = ({code}:IProps) => {
	return (
		<>
			<SyntaxHighlighter language="javascript" style={docco}>
				{code}
			</SyntaxHighlighter>
		</>
	);
};

export default CodeSyntax;
