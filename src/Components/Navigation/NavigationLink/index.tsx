import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

interface IProps {
	text: string;
	to: string;
}

const NavigationLink:FC<IProps> = ({text, to}:IProps) => {
	return (
		<li className='item'>
			<NavLink to={to} className='link'>
				{text}
			</NavLink>
		</li>
	);
};

export default NavigationLink;
