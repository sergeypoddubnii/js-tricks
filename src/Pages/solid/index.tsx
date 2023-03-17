import React, {FC} from 'react';
import PageContainer from 'Components/containers/page-container';
import Card from 'Components/containers/card';
import HashMenu, {IHash} from 'Components/navigation-hash/hash-menu';
import TitleHash from '../../Components/title/title-hash';
import DependencyInversion from './dependency-inversion';
import SingleResponsibility from './single-responsibility';
import OpenClose from './open-close';
import LiskovSubstitution from './liskov-substitution';
import InterfaceSegregation from './interface-segregation';

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
				<TitleHash text={solidHash[0].text} hashId={solidHash[0].to} />
				<SingleResponsibility />
				<TitleHash text={solidHash[1].text} hashId={solidHash[1].to} />
				<OpenClose />
				<TitleHash text={solidHash[2].text} hashId={solidHash[2].to} />
				<LiskovSubstitution />
				<TitleHash text={solidHash[3].text} hashId={solidHash[3].to} />
				<InterfaceSegregation />
				<TitleHash text={solidHash[4].text} hashId={solidHash[4].to} />
				<DependencyInversion />
			</Card>
			<HashMenu menu={solidHash} />
		</PageContainer>
	);
};

export default Solid;
