import React from 'react';
import MenuLink from './MenuLink';
import './styles.scss';

const Menu = () => {
	return (
		<nav>
			<ul className='menu'>
				<MenuLink text='React Patterns' to={'/'}/>
				<MenuLink text='DevTools' to={'/'}/>
				<MenuLink text='Design Pattens' to={'/'}/>
				<MenuLink text='MV Pattens' to={'/'}/>
				<MenuLink text='JS' to={'/'}/>
			</ul>
		</nav>
	);
};

export default Menu;
