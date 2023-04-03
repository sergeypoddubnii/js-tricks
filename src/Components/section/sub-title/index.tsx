import React, {FC} from 'react';

interface IProps {
	text: string;
}

const SubTitle:FC<IProps> = ({text}:IProps) => {
	return (
		<h6>{text}</h6>
	);
};

export default SubTitle;
