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
	const navigate = useNavigate();
	const location  = useLocation();

	const ref = React.useRef<HTMLAnchorElement>(null);
	const isOnScreen = useIsOnScreen(ref, {threshold: 1});

	useEffect(() => {
		const HASH_INDEX = 1;
		const hash = location.hash.slice(HASH_INDEX, location.hash.length);

		if(hash === hashId) return;

		navigate(`#${hashId}`);
	},[isOnScreen]);

	return (
		<section
			id={hashId}
			className='section'
		>
			<NavHashLink
				smooth
				to={`#${hashId}`}
				className='section__title'
				ref={ref}
			>
				#{title}
			</NavHashLink>
			{children}
		</section>
	);
};

export default Section;
