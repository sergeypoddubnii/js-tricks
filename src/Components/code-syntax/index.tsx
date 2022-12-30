import React, {FC, useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import './styles.scss';

interface IProps {
	code: string;
	className?: string;
}

const CodeSyntax:FC<IProps> = ({code, className}:IProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopyCode = () => {
		if(copied) return;
		setCopied(true);
		toast.success('Copied!');
	};

	return (
		<div className={className ? className : 'code'}>
			<CopyToClipboard
				text={code}
				onCopy={handleCopyCode}
			>
				<SyntaxHighlighter language="javascript" style={docco}>
					{code}
				</SyntaxHighlighter>
			</CopyToClipboard>
		</div>
	);
};

export default CodeSyntax;
