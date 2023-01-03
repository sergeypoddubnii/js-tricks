import React from 'react';
import NavigationLink from './NavigationLink';
import './styles.scss';
import SubMenu from '../SubMenu';
import routes from '../../routes';

const Navigation = () => {
	const reactPatterns = [{
		route: routes.REACT_PATTERNS.SWITCH_EVENT,
		name: 'Switch Event'
	}];

	const typescript = [{
		route: routes.TYPESCRIPT.GENERICS,
		name: 'Generics'
	}];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='DevTools' to={'/'}/>
				<NavigationLink text='Design Pattens' to={'/'}/>
				<NavigationLink text='MV Pattens' to={'/'}/>
				<NavigationLink text='JS' to={'/'}/>
				<SubMenu
					title='React Patterns'
					subList={reactPatterns}
				/>
				<SubMenu
					title='Typescript'
					subList={typescript}
				/>
			</ul>
		</nav>
	);
};

export default Navigation;
