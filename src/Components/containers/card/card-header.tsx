import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	title: string;
}

const CardHeader:FC<IProps> = ({title}:IProps) => {
	return (
		<div className='card__header'>
			<h4 className='card__title'>{title}</h4>
		</div>
	);
};

export default CardHeader;
