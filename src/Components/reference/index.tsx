import React, {FC, memo} from 'react';
import './styles.scss';

export interface IProps {
	path: string;
	text?: string;
}

const Reference:FC<IProps> = ({path, text}:IProps) => {
	const cutString = (string:string, length:number):string => {
		if(string.length <= length) {
			return string;
		}

		return `${string.slice(0, length)}...`;
	};

	return (
		<a
			href={path}
			target='_blank'
			rel="noreferrer"
			className='reference'
		>
			[ ]{' '}{text ? text : cutString(path, 70)}{' '}
		</a>
	);
};

export default memo(Reference);
