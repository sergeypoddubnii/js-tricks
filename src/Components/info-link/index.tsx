import React, {FC} from 'react';

export interface IProps {
	path: string;
	text?: string;
}

const InfoLink:FC<IProps> = ({path, text}:IProps) => {
	const cutString = (string:string, length:number):string => `${string.slice(0, length)}...`;
	return (
		<a
			href={path}
			target='_blank'
			rel="noreferrer"
		>
			[{' '}{text ? text : cutString(path, 50)}{' '}]
		</a>
	);
};

export default InfoLink;
