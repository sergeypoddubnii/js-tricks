import React, {FC} from 'react';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	className?: string;
}

const ComparisonCode:FC<IProps> = ({children, className}:IProps) => {
	return (
		<div className={className ? className : 'code__comparison'}>
			{children}
		</div>
	);
};

export default ComparisonCode;
