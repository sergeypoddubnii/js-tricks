import React from 'react';
import Navigation from './Components/Navigation';
import {BrowserRouter} from 'react-router-dom';
import  './assets/base.scss';

function App() {
	return (
		<BrowserRouter>
			<Navigation/>
		</BrowserRouter>
	);
}

export default App;
