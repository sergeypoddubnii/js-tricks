import React from 'react';

interface IProps {
	text: string;
}

const TitleHash = ({text}:IProps) => {
	return (
		<h4>{text}</h4>
	);
};

export default TitleHash;
