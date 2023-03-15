import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
}

const CardBody:FC<IProps> = ({children}:IProps) => {
	return (
		<div className='card__body'>
			{children}
		</div>
	);
};

export default CardBody;
