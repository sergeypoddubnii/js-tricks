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
import OpenClose from './Pages/solid/open-close';
import LiskovSubstitution from './Pages/solid/liskov-substitution';
import InterfaceSegregation from './Pages/solid/interface-segregation';
import DependencyInversion from './Pages/solid/dependency-inversion';

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
						{/*solid*/}
						<Route path={routes.SOLID.SINGLE_RESPONSIBILITY} element={<SingleResponsibility/>} />
						<Route path={routes.SOLID.OPEN_CLOSE} element={<OpenClose/>} />
						<Route path={routes.SOLID.LISKOV_SUBSTITUTION} element={<LiskovSubstitution/>} />
						<Route path={routes.SOLID.INTERFACE_SEGREGATION} element={<InterfaceSegregation/>} />
						<Route path={routes.SOLID.DEPENDENCY_INVERSION} element={<DependencyInversion/>} />
					</Routes>
				</div>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
