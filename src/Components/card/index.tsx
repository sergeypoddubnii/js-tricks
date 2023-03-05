import React, {FC, ReactNode} from 'react';
import CardHeader from './card-header';
import CardBody from './card-body';
import './styles.scss';

export interface IProps {
	title: string;
	children: ReactNode;
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
