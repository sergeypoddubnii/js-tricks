import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import IteratorThesis from './iterater-thesis';

const Iterator:FC = () => {
	return (
		<PageLayout>
			<Card title='Iterator'>
				<IteratorThesis/>
			</Card>
			<HashMenu menu={[]}/>
		</PageLayout>
	);
};

export default Iterator;
