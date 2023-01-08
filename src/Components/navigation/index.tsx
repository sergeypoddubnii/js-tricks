import React from 'react';
import NavigationLink from './navigation-link';
import './styles.scss';
import SubMenu from '../sub-menu';
import routes from '../../routes';

const Navigation = () => {
	const reactPatterns = [{
		route: routes.REACT_PATTERNS.SWITCH_EVENT,
		name: 'Switch Event'
	},
	{
		route: routes.REACT_PATTERNS.RENDER_PROPS,
		name: 'Render props'
	},
	{
		route: routes.REACT_PATTERNS.HOC,
		name: 'HOC'
	}];

	const typescript = [{
		route: routes.TYPESCRIPT.GENERICS,
		name: 'Generics'
	},
	{
		route: routes.TYPESCRIPT.ENUM,
		name: 'Enum'
	}
	];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='MV Pattens' to={'/'}/>
				<NavigationLink text='axios' to={'/'}/>
				<SubMenu
					title='React Patterns'
					subList={reactPatterns}
				/>
				<SubMenu
					title='Typescript'
					subList={typescript}
				/>
				<SubMenu
					title='SOLID'
					subList={[]}
				/>
			</ul>
		</nav>
	);
};

export default Navigation;
