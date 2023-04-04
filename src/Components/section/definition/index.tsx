import React, {FC} from 'react';
import '../styles.scss';

interface IProps {
	children: React.ReactNode;
	className?: string;
}

const Definition:FC<IProps> = ({children, className}:IProps) => {
	const styles = className ? `section__definition ${className}` : 'section__definition';
	return (
		<span className={styles}>{children}</span>
	);
};

export default Definition;
