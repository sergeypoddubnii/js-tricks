import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
}

const Paragraph:FC<IProps> = ({children}:IProps) => {
	return (
		<p className='paragraph'>
			{children}
		</p>
	);
};

export default Paragraph;
