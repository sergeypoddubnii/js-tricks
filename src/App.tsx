import React from 'react';
import Index from './Components/Navigation';
import {BrowserRouter} from 'react-router-dom';
import  './assets/base.scss';

function App() {
	return (
		<BrowserRouter>
			<Index/>
		</BrowserRouter>
	);
}

export default App;
