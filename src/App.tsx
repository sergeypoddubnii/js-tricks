import React, {Suspense} from 'react';
import Navigation from './Components/navigation';
import {BrowserRouter} from 'react-router-dom';
import Toast from './Components/toast';
import Router from './core/router/router';
import Loader from 'Components/loader';
import './assets/base.scss';
import AppLayout from './core/layout/app-layout';

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loader/>}>
					<AppLayout>
						<Navigation />
						<Router />
					</AppLayout>
				</Suspense>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
