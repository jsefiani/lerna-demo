/* eslint-disable react/require-default-props */
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

type DateUtilsProviderProps = {
	utils: any;
	children: React.ReactNode;
	locale?: any;
	libInstance?: any;
};

/**
 * Tell pickers which date management library it should use with `DateUtilsProvider`.
 * This component takes a `utils` prop, and makes it available down the React tree with React Context.
 * It should be used at the root of your component tree, or at the highest level you wish the pickers to be available.
 * @see Docs https://material-ui-pickers.dev/getting-started/installation
 */
export function DateUtilsProvider({ children, ...props }: DateUtilsProviderProps) {
	return <MuiPickersUtilsProvider {...props}>{children}</MuiPickersUtilsProvider>;
}
