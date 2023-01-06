import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	title: string;
	children: React.ReactNode;
}

const Card:FC<IProps> = ({title, children}:IProps) => {
	return (
		<div className='card'>
			<div className='card__header'>
				<h4 className='card__title'>{title}</h4>
			</div>
			<div className='card__body'>
				{children}
			</div>
		</div>
	);
};

export default Card;
