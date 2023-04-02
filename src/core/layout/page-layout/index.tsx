import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
}

const PageLayout:FC<IProps> = ({children}:IProps) => {
	return (
		<div className='page__container'>
			{children}
		</div>
	);
};

export default PageLayout;
