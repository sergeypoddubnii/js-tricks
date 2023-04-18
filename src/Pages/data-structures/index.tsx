import React from 'react';
import PageLayout from 'core/layout/page-layout';
import BinaryTree from './binary-tree';
import BinarySearch from './binary-search';

const DataStructures = () => {
	return (
		<PageLayout title={'Data Structures'}>
			<BinaryTree />
			<BinarySearch />
		</PageLayout>
	);
};

export default DataStructures;
