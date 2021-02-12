import {
	ThemeProvider as MuiThemeProvider,
	ThemeProviderProps as MuiThemeProviderProps,
	useTheme as useMuiTheme,
	ThemeOptions as MuiThemeProps,
} from '@material-ui/core/styles';
import MuiCssBaseline from '@material-ui/core/CssBaseline';

type ThemeProviderProps = MuiThemeProviderProps;

// TODO: Export ThemeProvider with default Kontron theme
/**
 * @see Docs https://material-ui.com/customization/theming/
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<MuiThemeProvider {...props}>
			<MuiCssBaseline />
			{children}
		</MuiThemeProvider>
	);
}

export type Theme = MuiThemeProps;

/**
 * Access theme variables inside your React components.
 * @see Docs https://material-ui.com/styles/advanced/#accessing-the-theme-in-a-component
 */
export function useTheme(): Theme {
	return useMuiTheme();
}
