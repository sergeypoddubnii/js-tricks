import React, {FC, ReactNode} from 'react';
import CardHeader from './card-header';
import CardBody from './card-body';
import ScrollContainer from 'Components/containers/scroll-container';
import './styles.scss';

export interface IProps {
	title: string;
	children: ReactNode;
}

const Card:FC<IProps> = ({title, children}:IProps) => {
	return (
		<ScrollContainer className='card'>
			<CardHeader title={title} />
			<CardBody>
				{children}
			</CardBody>
		</ScrollContainer>
	);
};

export default Card;
