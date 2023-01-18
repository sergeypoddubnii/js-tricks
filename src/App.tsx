import React from 'react';
import Navigation from './Components/navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SwitchEvent from './Pages/react-patterns/switch-event';
import Generics from './Pages/generics';
import Enum from './Pages/enum';
import RenderProps from './Pages/react-patterns/render-props';
import Toast from './Components/toast';
import './assets/base.scss';
import routes from './routes';
import SingleResponsibility from 'Pages/solid/single-responsibility';

function App() {
	return (
		<>
			<BrowserRouter>
				<div style={{display: 'flex'}}>
					<Navigation/>
					<Routes>
						<Route path={routes.REACT_PATTERNS.SWITCH_EVENT} element={<SwitchEvent/>} />
						<Route path={routes.REACT_PATTERNS.RENDER_PROPS} element={<RenderProps/>} />
						<Route path={routes.TYPESCRIPT.GENERICS} element={<Generics/>} />
						<Route path={routes.TYPESCRIPT.ENUM} element={<Enum/>} />
						<Route path={routes.SOLID.SINGLE_RESPONSIBILITY} element={<SingleResponsibility/>} />
					</Routes>
				</div>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
