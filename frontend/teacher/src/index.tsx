import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>Hello, teacher!</BrowserRouter>
	</React.StrictMode>,
	document.querySelector('#root')
);
