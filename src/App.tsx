import React from 'react';
import Navigation from './Components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SwitchEvent from './Pages/react-patterns/switch-event';
import routes from './routes';
import './assets/base.scss';

function App() {
	return (
		<>
			<BrowserRouter>
				<div style={{display: 'flex'}}>
					<Navigation/>
					<Routes>
						<Route path={routes.REACT_PATTERNS.SWITCH_EVENT} element={<SwitchEvent/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
