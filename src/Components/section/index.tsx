import React, {useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useIsOnScreen from 'hooks/useIsOnScreen';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
	hashId?: string;
}

const Section = ({children, title, hashId}:IProps) => {
	const HASH_SIGN = '#';
	const HASH_INDEX = 1;
	const THRESHOLD = 1;

	const navigate = useNavigate();
	const location  = useLocation();

	const ref = React.useRef<HTMLAnchorElement>(null);
	const isOnScreen = useIsOnScreen(ref, {threshold: THRESHOLD});

	useEffect(() => {
		const hash = location.hash.slice(HASH_INDEX, location.hash.length);

		if(hash === hashId) return;

		navigate(`${HASH_SIGN}${hashId}`);
	},[isOnScreen]);

	return (
		<section
			id={hashId}
			className='section'
		>
			<NavHashLink
				smooth
				to={`${HASH_SIGN}${hashId}`}
				className='section__title'
				ref={ref}
			>
				{HASH_SIGN}{title}
			</NavHashLink>
			{children}
		</section>
	);
};

export default Section;
