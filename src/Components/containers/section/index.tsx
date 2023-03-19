import React from 'react';
import './styles.scss';
import Title from 'Components/title';

interface IProps {
	children: React.ReactNode;
	title: string;
	hashId?: string;
}

const Section = ({children, title, hashId}:IProps) => {
	return (
		<section id={hashId} className='section'>
			<Title title={title} />
			{children}
		</section>
	);
};

export default Section;
