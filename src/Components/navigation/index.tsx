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

	const designPatterns = [{
		route: routes.DESIGN_PATTERNS.FACTORY,
		name: 'Factory'
	},
	{
		route: routes.DESIGN_PATTERNS.MODULE,
		name: 'Module patterns'
	}];

	const solid = [{
		route: routes.SOLID.SINGLE_RESPONSIBILITY,
		name: 'Singe responsibility'
	},
	{
		route: routes.SOLID.OPEN_CLOSE,
		name: 'Open Close'
	},
	{
		route: routes.SOLID.LISKOV_SUBSTITUTION,
		name: 'Liskov substitution'
	},
	{
		route: routes.SOLID.INTERFACE_SEGREGATION,
		name: 'Interface segregation'
	},
	{
		route: routes.SOLID.DEPENDENCY_INVERSION,
		name: 'Dependency inversion'
	}];

	const architecture = [{
		route: routes.ARCHITECTURE.FLUX,
		name: 'Flux'
	}];

	const react = [{
		route: routes.REACT.V_18,
		name: 'React v-18'
	}];

	const customRealization = [{
		route: routes.CUSTOM_REALIZATION.REDUX,
		name: 'Redux'
	},
	{
		route: routes.CUSTOM_REALIZATION.PROMISE_ALL,
		name: 'Promise'
	},
	{
		route: routes.CUSTOM_REALIZATION.ARRAY_METHODS,
		name: 'Array Methods'
	}
	];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='OOP principles' to={routes.OOP_PRINCIPLES}/>
				<NavigationLink text='MV Pattens' to={'/'}/>
				<NavigationLink text='axios' to={'/'}/>
				<SubMenu
					title='React Patterns'
					subList={reactPatterns}
				/>
				<SubMenu
					title='Design Patterns'
					subList={designPatterns}
				/>
				<SubMenu
					title='Typescript'
					subList={typescript}
				/>
				<SubMenu
					title='SOLID'
					subList={solid}
				/>
				<SubMenu
					title='Architecture'
					subList={architecture}
				/>
				<SubMenu
					title='React'
					subList={react}
				/>
				<SubMenu
					title='Custom realization'
					subList={customRealization}
				/>
			</ul>
		</nav>
	);
};

export default Navigation;
