import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

/**
 * Customize theme by overriding existing styles.
 * @see Docs https://material-ui.com/customization/theming/
 */
export function customizeTheme(props: ThemeOptions) {
	return createMuiTheme(props);
}
