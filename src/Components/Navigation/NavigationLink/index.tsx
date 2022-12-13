import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.scss';

interface IProps {
	text: string;
	to: string;
}

const NavigationLink:FC<IProps> = ({text, to}:IProps) => {
	const navigate = useNavigate();

	const redirectToPush = () => navigate(to);

	return (
		<li className='item'>
			<button
				type='button'
				className='link'
				onClick={redirectToPush}
			>
				{text}
			</button>
		</li>
	);
};

export default NavigationLink;
