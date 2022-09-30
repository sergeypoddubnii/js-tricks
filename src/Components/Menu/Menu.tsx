import React from 'react';
import MenuLink from './MenuLink';
import styles from './styles.module.scss';

const Menu = () => {
	return (
		<aside>
			<div>
				<nav>
					<ul className={styles.menu}>
						<MenuLink text='React Patterns' to={''}/>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Menu;
