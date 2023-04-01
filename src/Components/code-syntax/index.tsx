import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {AiFillCopy} from 'react-icons/ai';
import CopyButton from './copy-button';
import './styles.scss';

interface IProps {
	code: string;
	className?: string;
	title?: string;
}

const CodeSyntax:FC<IProps> = ({code, className, title}:IProps) => {
	return (
		<div className={className ? `${className} code` : 'code'}>
			<h6 className='code__title'>{title}</h6>
			<CopyButton>
				<AiFillCopy className='code__icon'/>
			</CopyButton>
			<SyntaxHighlighter
				language="javascript"
				style={agate}
				showLineNumbers={true}
				wrapLongLines={true}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeSyntax;
