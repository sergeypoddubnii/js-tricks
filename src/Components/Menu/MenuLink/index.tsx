import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

interface IProps {
	text: string;
	to: string;
}

const MenuLink:FC<IProps> = ({text, to}:IProps) => {
	return (
		<li className={styles.item}>
			<Link to={to} className={styles.link}>
				{text}
			</Link>
		</li>
	);
};

export default MenuLink;
