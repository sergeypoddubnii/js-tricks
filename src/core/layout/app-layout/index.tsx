import React,{FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
}

const AppLayout:FC<IProps> = ({children}:IProps) => {
	return (
		<div className='layout'>
			{children}
		</div>
	);
};

export default AppLayout;
