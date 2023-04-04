import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	title?: string;
}

const Thesis:FC<IProps> = ({children, title}:IProps) => {
	return (
		<>
			<h6>{title}</h6>
			<div className='thesis'>
				<span className='thesis__icon'>&#x2022;</span>
				<div>
					{children}
				</div>
			</div>
		</>
	);
};

export default Thesis;
