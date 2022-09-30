import React from 'react';
import Menu from './Components/Menu/Menu';
import {BrowserRouter} from 'react-router-dom';
import  './assets/base.scss';

function App() {
	return (
		<BrowserRouter>
			<Menu/>
		</BrowserRouter>
	);
}

export default App;
