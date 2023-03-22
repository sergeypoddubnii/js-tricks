import React, {useEffect} from 'react';
import './styles.scss';
import Title from 'Components/title';
import useIsOnScreen from 'hooks/useIsOnScreen';
import {useNavigate, useLocation} from 'react-router-dom';

interface IProps {
	children: React.ReactNode;
	title: string;
	hashId?: string;
}

const Section = ({children, title, hashId}:IProps) => {
	const navigate = useNavigate();
	const location  = useLocation();

	const ref = React.useRef<HTMLElement>(null);
	const isOnScreen = useIsOnScreen(ref, {threshold: 0.55});

	useEffect(() => {
		const hash = location.hash.slice(1, location.hash.length);

		if(hash === hashId) return;

		navigate(`#${hashId}`);
	},[isOnScreen]);

	return (
		<section
			id={hashId}
			className='section'
			ref={ref}
		>
			<Title title={title} />
			{children}
		</section>
	);
};

export default Section;
