import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

interface IProps {
	code: string;
}

const CodeSyntax:FC<IProps> = ({code}:IProps) => {

	const handleCopyCode = () => toast.success('Copied!', {
		position: 'bottom-center',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});

	return (
		<>
			<CopyToClipboard
				text={code}
				onCopy={handleCopyCode}
			>
				<SyntaxHighlighter language="javascript" style={docco}>
					{code}
				</SyntaxHighlighter>
			</CopyToClipboard>
		</>
	);
};

export default CodeSyntax;