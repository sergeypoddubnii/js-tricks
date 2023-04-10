import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import DependencyInversion from './dependency-inversion';
import SingleResponsibility from './single-responsibility';
import OpenClose from './open-close';
import LiskovSubstitution from './liskov-substitution';
import InterfaceSegregation from './interface-segregation';

const solidHash = [
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
		<PageLayout
			title='S.O.L.I.D.'
			menu={solidHash}
		>
			<SingleResponsibility hashId={solidHash[0].to}/>
			<OpenClose hashId={solidHash[1].to} />
			<LiskovSubstitution  hashId={solidHash[2].to}/>
			<InterfaceSegregation hashId={solidHash[3].to} />
			<DependencyInversion hashId={solidHash[4].to}/>
		</PageLayout>
	);
};

export default Solid;
