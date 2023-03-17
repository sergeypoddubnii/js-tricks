import React, {FC} from 'react';
import CodeSyntax from 'Components/code-syntax';
import code from './singe-responsibility.json';
import Section from 'Components/containers/section';

interface IProps {
	hashId: string;
}

const SingleResponsibility:FC<IProps> = ({hashId}:IProps) => {
	return (
		<Section
			title='Single Responsibility Principle'
			hashId={hashId}
		>
			<p>A essence, component or module should have one and only one job.A essence should have a single responsibility</p>
			<p>This principle aims to separate behaviours so that if bugs arise as a result of your change, it won’t affect other unrelated behaviours.</p>
			<p>This component has only one responsibility: render button and redirect to. No more responsibilities just one</p>
			<CodeSyntax code={code} />
		</Section>
	);
};

export default SingleResponsibility;
