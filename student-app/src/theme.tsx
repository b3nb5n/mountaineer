import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: 'TTNorms, Helvetica, sans-serif',
		h1: {
			fontWeight: 'bold',
			fontSize: '6rem',
		},
		h2: {
			fontWeight: 'bold',
			fontSize: '4rem',
		},
		h3: {
			fontWeight: 'bold',
			fontSize: '2rem',
		},
		h4: {
			fontWeight: 'bold',
			fontSize: '1.5rem',
		},
		h5: {
			fontWeight: 'bold',
			fontSize: '1.2rem',
		},
		h6: {
			fontWeight: 'bold',
			fontSize: '1rem',
		},
	},
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#fff',
		},
	},
});

export default theme;
