import React from 'react';
import routePaths from './constants/route-paths';
import {useRoutes} from 'react-router-dom';

const OopPrinciples = React.lazy(() => import('Pages/oop-principles'));
const Flux = React.lazy(() => import('Pages/architectures/flux'));
const Mvc = React.lazy(() => import('Pages/architectures/mvc'));
const CustomRedux = React.lazy(() => import('Pages/custom-realization/custom-redux'));
const CustomPromise = React.lazy(() => import('Pages/custom-realization/promise'));
const ArrayMethods = React.lazy(() => import('Pages/custom-realization/array-methods'));
const HelperFunctions = React.lazy(() => import('Pages/custom-realization/helper-functions'));
const LoadingPageProcess = React.lazy(() => import('Pages/web-staff/loading-page-process'));
const EventLoop = React.lazy(() => import('Pages/web-staff/event-loop'));
const Solid = React.lazy(() => import('Pages/solid'));

const routes = [
	{
		path: routePaths.OOP_PRINCIPLES,
		element: <OopPrinciples />,
	},
	{
		path: routePaths.ARCHITECTURE.FLUX,
		element: <Flux />,
	},
	{
		path: routePaths.ARCHITECTURE.MVC,
		element: <Mvc />,
	},
	{
		path: routePaths.CUSTOM_REALIZATION.REDUX,
		element: <CustomRedux />,
	},
	{
		path: routePaths.CUSTOM_REALIZATION.PROMISE_ALL,
		element: <CustomPromise />,
	},
	{
		path: routePaths.CUSTOM_REALIZATION.ARRAY_METHODS,
		element: <ArrayMethods />,
	},
	{
		path: routePaths.CUSTOM_REALIZATION.HELPER_FUNCTIONS,
		element: <HelperFunctions />,
	},
	{
		path: routePaths.WEB_STAFF.LOADING_PAGE_PROCESS,
		element: <LoadingPageProcess />,
	},
	{
		path: routePaths.WEB_STAFF.EVENT_LOOP,
		element: <EventLoop />,
	},
	{
		path: routePaths.SOLID,
		element: <Solid />,
	},
];

const Router = () => {
	const router = useRoutes(routes);

	return router;
};

export default Router;
