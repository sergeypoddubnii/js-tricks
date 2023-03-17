import React from 'react';
import Navigation from './Components/navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Toast from './Components/toast';
import './assets/base.scss';
import routes from './routes';
import OopPrinciples from 'Pages/oop-principles';
import Flux from 'Pages/architectures/flux';
import React18 from 'Pages/react/react-18';
import Mvc from 'Pages/architectures/mvc';
import CustomRealization from 'Pages/custom-realization/custom-redux';
import CustomPromise from 'Pages/custom-realization/promise';
import ArrayMethods from './Pages/custom-realization/array-methods';
import HelperFunctions from './Pages/custom-realization/helper-functions';
import LoadingPageProcess from './Pages/web-staff/loading-page-process';
import EventLoop from './Pages/web-staff/event-loop';
import Solid from './Pages/solid';

function App() {
	return (
		<>
			<BrowserRouter>
				<div style={{display: 'flex'}}>
					<Navigation/>
					<Routes>
						<Route path={routes.OOP_PRINCIPLES} element={<OopPrinciples/>} />
						{/*solid*/}
						<Route path={routes.SOLID} element={<Solid/>} />
						{/*architecture*/}
						<Route path={routes.ARCHITECTURE.FLUX} element={<Flux/>} />
						<Route path={routes.ARCHITECTURE.MVC} element={<Mvc/>} />
						{/*react*/}
						<Route path={routes.REACT.V_18} element={<React18/>} />
						{/*custom realization*/}
						<Route path={routes.CUSTOM_REALIZATION.REDUX} element={<CustomRealization/>} />
						<Route path={routes.CUSTOM_REALIZATION.PROMISE_ALL} element={<CustomPromise/>} />
						<Route path={routes.CUSTOM_REALIZATION.ARRAY_METHODS} element={<ArrayMethods/>} />
						<Route path={routes.CUSTOM_REALIZATION.HELPER_FUNCTIONS} element={<HelperFunctions/>} />
						{/*web-staff*/}
						<Route path={routes.WEB_STAFF.LOADING_PAGE_PROCESS} element={<LoadingPageProcess/>} />
						<Route path={routes.WEB_STAFF.EVENT_LOOP} element={<EventLoop/>} />
					</Routes>
				</div>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
