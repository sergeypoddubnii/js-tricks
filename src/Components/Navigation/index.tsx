import React from 'react';
import MenuLink from './NavigationLink';
import './styles.scss';

const Navigation = () => {
	return (
		<nav>
			<ul className='nav'>
				<MenuLink text='React Patterns' to={'/'}/>
				<MenuLink text='DevTools' to={'/'}/>
				<MenuLink text='Design Pattens' to={'/'}/>
				<MenuLink text='MV Pattens' to={'/'}/>
				<MenuLink text='JS' to={'/'}/>
			</ul>
		</nav>
	);
};

export default Navigation;
