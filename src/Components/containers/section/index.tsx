import React from 'react';
import TitleHash from 'Components/title/title-hash';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
	hashId?: string;
}

const Section = ({children, title, hashId}:IProps) => {
	return (
		<section id={hashId} className='section'>
			<TitleHash text={title}/>
			{children}
		</section>
	);
};

export default Section;
