import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, customizeTheme } from '@kontron/ui';
import App from './App';

const theme = customizeTheme({
	palette: {
		primary: {
			main: '#006bb7',
		},
		secondary: {
			main: '#1d1d1b',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
