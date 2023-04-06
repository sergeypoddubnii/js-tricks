import React from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import PromiseDescription from './promise-description';
import PromiseInstanceMethods from './promise-instance-methods';
import ReferenceList from 'Components/reference/reference-list';
import PromiseStaticMethods from './promise-static-methods';
import {useAppSelector} from 'store/hooks';
import {selectPromise} from './promiseSlice';

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
	const {references} = useAppSelector(selectPromise);

	return (
		<PageLayout>
			<Card title={'Promises'}>
				<PromiseDescription />
				<PromiseInstanceMethods />
				<PromiseStaticMethods />
				<ReferenceList references={references}/>
			</Card>
			<HashMenu menu={hashMenu} />
		</PageLayout>
	);
};

export default Promises;
