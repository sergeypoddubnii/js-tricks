import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import IteratorThesis from './iterater-thesis';
import GeneratorSection from './generator-section';

const hashMenu = [
	{
		to: 'iterator',
		text: 'Iterator'
	},
	{
		to: 'generator',
		text: 'Generator'
	}
];

const Iterator:FC = () => {
	return (
		<PageLayout
			title='Iterator'
			menu={hashMenu}
		>
			<IteratorThesis/>
			<GeneratorSection/>
		</PageLayout>
	);
};

export default Iterator;
