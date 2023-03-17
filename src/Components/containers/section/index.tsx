import React from 'react';
import './styles.scss';
import TitleHash from 'Components/title/title-hash';

interface IProps {
	children: React.ReactNode;
	title: string;
	hashId?: string;
}

const Section = ({children, title}:IProps) => {
	return (
		<div>
			<TitleHash text={title} hashId={''}/>
			{children}
		</div>
	);
};

export default Section;
