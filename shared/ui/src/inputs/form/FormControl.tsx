import MuiFormControl, { FormControlProps as MuiFormControlProps } from '@material-ui/core/FormControl';

export type FormControlProps = MuiFormControlProps;

export const FormControl = ({ children, margin = 'normal', ...props }: FormControlProps) => {
	return (
		<MuiFormControl {...props} margin={margin}>
			{children}
		</MuiFormControl>
	);
};
