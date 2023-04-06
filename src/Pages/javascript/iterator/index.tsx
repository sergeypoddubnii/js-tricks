import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';

const Iterator:FC = () => {
	return (
		<PageLayout>
			<Card title='Iterator'>
				<p>hello</p>
			</Card>
			<HashMenu menu={[]}/>
		</PageLayout>
	);
};

export default Iterator;
