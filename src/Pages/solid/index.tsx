import React, {FC} from 'react';
import PageContainer from 'Components/containers/page-container';
import Card from 'Components/containers/card';
import HashMenu, {IHash} from 'Components/navigation-hash/hash-menu';
import DependencyInversion from './dependency-inversion';
import SingleResponsibility from './single-responsibility';
import OpenClose from './open-close';
import LiskovSubstitution from './liskov-substitution';
import InterfaceSegregation from './interface-segregation';

const solidHash:IHash[] = [
	{
		to: 'single-responsibility',
		text: 'Single Responsibility',
	},
	{
		to: 'open-close',
		text: 'Open Close',
	},
	{
		to: 'liskov-substitution',
		text: 'Liskov Substitution',
	},
	{
		to: 'interface-segregation',
		text: 'Interface Segregation',
	},
	{
		to: 'dependency-inversion',
		text: 'Dependency Inversion',
	},
];

const Solid: FC = () => {

	return (
		<PageContainer>
			<Card title='S.O.L.I.D.'>
				<SingleResponsibility hashId={solidHash[0].to}/>
				<OpenClose hashId={solidHash[1].to} />
				<LiskovSubstitution  hashId={solidHash[2].to}/>
				<InterfaceSegregation hashId={solidHash[3].to} />
				<DependencyInversion hashId={solidHash[4].to}/>
			</Card>
			<HashMenu menu={solidHash} />
		</PageContainer>
	);
};

export default Solid;
