import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import IteratorThesis from './iterater-thesis';
import GeneratorSection from './generator-section';

const Iterator:FC = () => {
	return (
		<PageLayout
			title='Iterator'
		>
			<IteratorThesis/>
			<GeneratorSection/>
		</PageLayout>
	);
};

export default Iterator;
