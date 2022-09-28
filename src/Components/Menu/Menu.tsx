import React from 'react';
import styles from './styles.module.scss';

const Menu = () => {
	return (
		<aside>
			<div className={styles.menu}>
				<nav>
					<ul>
						<li>
							React
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Menu;
