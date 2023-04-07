import React, {FC} from 'react';
import Card from 'Components/containers/card';
import HashMenu, {IHash} from 'Components/navigation-hash/hash-menu';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
	menu?: IHash[];
}

const PageLayout:FC<IProps> = ({children, title, menu=[]}:IProps) => {
	return (
		<div className='page__container'>
			<Card title={title}>
				{children}
			</Card>
			<HashMenu menu={menu} />
		</div>
	);
};

export default PageLayout;
