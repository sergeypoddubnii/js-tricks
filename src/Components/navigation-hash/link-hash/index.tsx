import React, {FC} from 'react';
import { NavHashLink } from 'react-router-hash-link';

interface IProps {
	to: string;
	text: string;
	className?: string;
}

const LinkHash:FC<IProps> = ({to, text, className}:IProps) => {
	return (
		<NavHashLink
			smooth
			to={to}
			className={className}
		>
			{text}
		</NavHashLink>
	);
};

export default LinkHash;
