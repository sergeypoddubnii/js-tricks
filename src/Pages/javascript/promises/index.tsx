import React from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import PromiseDescription from './promise-description';
import PromiseInstanceMethods from './promise-instance-methods';

const hashMenu = [
	{
		to: 'description',
		text: 'Description'
	},
	{
		to: 'instance-methods',
		text: 'Instance Methods'
	},
	{
		to: 'static-methods',
		text: 'Static Methods'
	},
];

const Promises = () => {
	return (
		<PageLayout>
			<Card title={'Promises'}>
				<PromiseDescription />
				<PromiseInstanceMethods />
			</Card>
			<HashMenu menu={hashMenu} />
		</PageLayout>
	);
};

export default Promises;
