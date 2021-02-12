import DateFnsUtils from '@date-io/date-fns';

import { ThemeProvider, customizeTheme, DateUtilsProvider } from '../src/system';

const theme = customizeTheme({
	palette: {
		primary: {
			main: '#4281b5',
		},
		secondary: {
			main: '#1d1d1b',
		},
	},
});

const withTheme = (StoryFn: Function) => (
	<ThemeProvider theme={theme}>
		<DateUtilsProvider utils={DateFnsUtils}>
			<div id="story-wrapper" style={{ minHeight: '100vh' }}>
				<StoryFn />
			</div>
		</DateUtilsProvider>
	</ThemeProvider>
);

export const decorators = [withTheme];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
