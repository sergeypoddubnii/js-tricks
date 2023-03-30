import React from 'react';
import NavigationLink from './navigation-link';
import './styles.scss';
import SubMenu from '../sub-menu';
import routes from '../../core/constants/route-paths';

const Navigation = () => {

	const architecture = [{
		route: routes.ARCHITECTURE.FLUX,
		name: 'Flux'
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
				<NavigationLink text='Javascript' to={routes.JAVASCRIPT}/>
				<NavigationLink text='SOLID' to={routes.SOLID}/>
				<SubMenu
					title='Architecture'
					subList={architecture}
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
