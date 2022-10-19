import React from 'react';
import MenuLink from './MenuLink';
import styles from './styles.module.scss';

const Menu = () => {
	return (
		<nav>
			<ul className={styles.menu}>
				<MenuLink text='React Patterns' to={'/'}/>
				<MenuLink text='DevTools' to={'/'}/>
			</ul>
		</nav>
	);
};

export default Menu;
