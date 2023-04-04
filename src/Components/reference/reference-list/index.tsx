import React, {FC} from 'react';
import Reference from '../index';

interface IProps {
	references: string[];
	title?: string;
}

const ReferenceList:FC<IProps> = ({references, title='References'}:IProps) => {

	const list = references.map((link: string) => <Reference key={link} path={link}/>);
	return (
		<div>
			<h5>{title}:</h5>
			{list}
		</div>
	);
};

export default ReferenceList;
