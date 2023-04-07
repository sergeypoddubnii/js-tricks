import React from 'react';
import PageLayout from 'core/layout/page-layout';
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
		<PageLayout
			title={'Promises'}
			menu={hashMenu}
		>
			<PromiseDescription />
			<PromiseInstanceMethods />
			<PromiseStaticMethods />
			<ReferenceList references={references}/>
		</PageLayout>
	);
};

export default Promises;
