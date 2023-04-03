import React from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import PromiseDescription from './promise-description';
import PromiseInstanceMethods from './promise-instance-methods';

const Promises = () => {
	return (
		<PageLayout>
			<Card title={'Promises'}>
				<PromiseDescription />
				<PromiseInstanceMethods />
				<HashMenu menu={[]} />
			</Card>
		</PageLayout>
	);
};

export default Promises;
