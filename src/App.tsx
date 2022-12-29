import React from 'react';
import Navigation from './Components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SwitchEvent from './Pages/react-patterns/switch-event';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/base.scss';
import routes from './routes';

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
			<ToastContainer
				position="bottom-center"
				autoClose={1500}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}

export default App;
