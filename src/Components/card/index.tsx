import React, {FC} from 'react';
import './styles.scss';
import CardHeader from './card-header';
import CardBody from './card-body';

interface IProps {
	title: string;
	children: React.ReactNode;
}

const Card:FC<IProps> = ({title, children}:IProps) => {
	return (
		<div className='card'>
			<CardHeader title={title} />
			<CardBody>
				{children}
			</CardBody>
		</div>
	);
};

export default Card;
