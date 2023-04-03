import React, {FC} from 'react';
import CodeSyntax from 'Components/code-syntax';
import ComparisonCode from '../../../Components/code-syntax/comparison-code';
import antiPattern from './anti-pattern.json';
import pattern from './pattern.json';
import Section from 'Components/section';

interface IProps {
	hashId: string;
}

const OpenClose:FC<IProps> = ({hashId}:IProps) => {
	return (
		<Section
			title='Open Close Principle'
			hashId={hashId}
		>
			<p>Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.</p>
			<ComparisonCode>
				<CodeSyntax code={antiPattern} title='anti-pattern'/>
				<CodeSyntax code={pattern} title='pattern'/>
			</ComparisonCode>
		</Section>
	);
};

export default OpenClose;
