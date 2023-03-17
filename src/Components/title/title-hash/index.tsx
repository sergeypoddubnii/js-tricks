import React from 'react';

interface IProps {
	text: string;
	hashId?: string;
}

const TitleHash = ({text, hashId}:IProps) => {
	return (
		<h4 id={hashId?.slice(1, hashId.length)}>{text}</h4>
	);
};

export default TitleHash;
