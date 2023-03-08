import React, {FC, memo} from 'react';
import './styles.scss';

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
			className='infoLink'
		>
			[ ]{' '}{text ? text : cutString(path, 70)}{' '}
		</a>
	);
};

export default memo(InfoLink);
