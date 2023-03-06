import React, {FC, useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lioshi } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import './styles.scss';

interface IProps {
	code: string;
	className?: string;
	title?: string;
}

const CodeSyntax:FC<IProps> = ({code, className, title}:IProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopyCode = () => {
		if(copied) return;
		setCopied(true);
		toast.success('Copied!');
	};

	return (
		<div className={className ? className : 'code'}>
			<h6 className='code__title'>{title}</h6>
			<CopyToClipboard
				text={code}
				onCopy={handleCopyCode}
			>
				<SyntaxHighlighter
					language="javascript"
					style={lioshi}
					showLineNumbers={true}
					wrapLongLines={true}
				>
					{code}
				</SyntaxHighlighter>
			</CopyToClipboard>
		</div>
	);
};

export default CodeSyntax;
