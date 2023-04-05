import React from 'react';
import NavigationLink from './navigation-link';
import SubMenu from './sub-menu';
import routes from '../../core/constants/route-paths';
import './styles.scss';

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

	const js = [{
		route: routes.JAVASCRIPT.PROMISES,
		name: 'Promises'
	}];

	return (
		<nav>
			<ul className='nav'>
				<NavigationLink text='OOP principles' to={routes.OOP_PRINCIPLES}/>
				<NavigationLink text='SOLID' to={routes.SOLID}/>
				<SubMenu
					title='Js'
					subList={js}
				/>
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
