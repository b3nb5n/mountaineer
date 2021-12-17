import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>Hello, student!</BrowserRouter>
	</React.StrictMode>,
	document.querySelector('#root')
);
