import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
}

const Thesis:FC<IProps> = ({children}:IProps) => {
	return (
		<div className='thesis'>
			<span className='thesis__icon'>&#x2022;</span>
			<div>
				{children}
			</div>
		</div>
	);
};

export default Thesis;
