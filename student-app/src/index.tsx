import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './data/auth-context';
import './index.css';
import AuthDialog from './presentation/auth/auth-dialog';
import ClassesPage from './presentation/classes-page';
import theme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<AuthDialog />
				<Box component='section'>
					<Box className='container'>
						<BrowserRouter>
							<Routes>
								<Route path='/' element={<ClassesPage />} />
							</Routes>
						</BrowserRouter>
					</Box>
				</Box>
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
