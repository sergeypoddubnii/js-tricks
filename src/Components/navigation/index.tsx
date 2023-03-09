import React from 'react';
import NavigationLink from './navigation-link';
import './styles.scss';
import SubMenu from '../sub-menu';
import routes from '../../routes';

const Navigation = () => {
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
	},
	{
		route: routes.CUSTOM_REALIZATION.HELPER_FUNCTIONS,
		name: 'Helper Functions'
	}
	];

	const WebStaff = [{
		route: routes.WEB_STAFF.LOADING_PAGE_PROCESS,
		name: 'Page loading process'
	},
	{
		route: routes.WEB_STAFF.EVENT_LOOP,
		name: 'Event loop'
	}];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='OOP principles' to={routes.OOP_PRINCIPLES}/>
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
				<SubMenu
					title='Web Staff'
					subList={WebStaff}
				/>
			</ul>
		</nav>
	);
};

export default Navigation;
