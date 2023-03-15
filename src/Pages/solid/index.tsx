import React, {FC} from 'react';
import PageContainer from 'Components/containers/page-container';
import Card from 'Components/containers/card';
import HashMenu, {IHash} from 'Components/navigation-hash/hash-menu';

const solidHash:IHash[] = [
	{
		to: '#single-responsibility',
		text: 'Single Responsibility',
	},
	{
		to: '#open-close',
		text: 'Open Close',
	},
	{
		to: '#liskov-substitution',
		text: 'Liskov Substitution',
	},
	{
		to: '#interface-segregation',
		text: 'Interface Segregation',
	},
	{
		to: '#dependency-inversion',
		text: 'Dependency Inversion',
	},
];

const Solid: FC = () => {
	return (
		<PageContainer>
			<Card title={'Solid'}>
				<p>hello</p>
			</Card>
			<HashMenu menu={solidHash} />
		</PageContainer>
	);
};

export default Solid;
