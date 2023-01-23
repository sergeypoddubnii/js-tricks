import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.scss';

export enum EnumNavigationType {
	PRIMARY='primary',
	SECONDARY='secondary',
}

interface IProps {
	text: string;
	to: string;
	icon?: React.ReactNode;
	type?: EnumNavigationType;
}

const NavigationLink:FC<IProps> = ({text, to, type=EnumNavigationType.PRIMARY, icon}:IProps) => {
	const navigate = useNavigate();

	const redirectToPush = () => navigate(to);

	return (
		<li className='navigation-link__container'>
			{icon}
			<button
				type='button'
				className={`navigation-link__link navigation-link__link_${type}`}
				onClick={redirectToPush}
			>
				{text}
			</button>
		</li>
	);
};

export default NavigationLink;
