import React from 'react';
import Card from 'Components/containers/card';
import CodeSyntax from 'Components/code-syntax';
import code from './singe-responsibility.json';
import HashMenu from 'Components/navigation-hash/hash-menu';
import PageContainer from 'Components/containers/page-container';

const hashMenu = [
	{
		to: '#menu',
		text: 'menu'
	},
	{
		to: '#hello',
		text: 'hello'
	},
	{
		to: '#new',
		text: 'new'
	},
];

const SingleResponsibility = () => {

	return (
		<PageContainer>
			<Card title='Single Responsibility'>
				<p>A essence, component or module should have one and only one job.A essence should have a single responsibility</p>
				<p>This principle aims to separate behaviours so that if bugs arise as a result of your change, it won’t affect other unrelated behaviours.</p>
				<p>This component has only one responsibility: render button and redirect to. No more responsibilities just one</p>
				<CodeSyntax code={code} />
			</Card>
			<HashMenu menu={hashMenu}/>
		</PageContainer>
	);
};

export default SingleResponsibility;
