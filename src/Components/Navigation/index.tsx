import React from 'react';
import NavigationLink from './NavigationLink';
import './styles.scss';
import SubMenu from '../SubMenu';

const Navigation = () => {
	const reactPatterns = [{
		route: '/',
		name: 'Switch Event'
	}];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='React Patterns' to={'/'}/>
				<NavigationLink text='DevTools' to={'/'}/>
				<NavigationLink text='Design Pattens' to={'/'}/>
				<NavigationLink text='MV Pattens' to={'/'}/>
				<NavigationLink text='JS' to={'/'}/>
				<SubMenu
					title='React Patterns'
					subList={reactPatterns}
				/>
			</ul>
		</nav>
	);
};

export default Navigation;
