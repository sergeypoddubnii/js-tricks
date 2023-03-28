import React, {Suspense} from 'react';
import Navigation from './Components/navigation';
import {BrowserRouter} from 'react-router-dom';
import Toast from './Components/toast';
import './assets/base.scss';
import Router from './core/router';

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<div/>}>
					<div style={{display: 'flex'}}>
						<Navigation />
						<Router />
					</div>
				</Suspense>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
