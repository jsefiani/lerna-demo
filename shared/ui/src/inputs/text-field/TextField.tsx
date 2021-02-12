/* eslint-disable @typescript-eslint/no-shadow */
import MuiInput, { OutlinedInputProps as MuiInputProps } from '@material-ui/core/OutlinedInput';

import {
	FormLabel,
	FormHelperText,
	FormLabelProps,
	FormHelperTextProps,
	FormControlProps,
	FormControl,
} from '../form';

export type TextFieldProps = FormControlProps & {
	id: string;
	label: string;
	errorMessage?: string;
	InputProps?: InputProps;
	FormLabelProps?: FormLabelProps;
	FormHelperTextProps?: FormHelperTextProps;
	value?: unknown;
	type?: string;
};

export type InputProps = MuiInputProps;

export const Input = ({ margin = 'dense', ...props }: InputProps) => {
	return <MuiInput {...props} margin={margin} />;
};

export const TextField = ({
	id,
	label,
	errorMessage,
	InputProps,
	FormLabelProps,
	type = 'text',
	value,
	...props
}: TextFieldProps) => {
	return (
		<FormControl {...props}>
			<FormLabel {...FormLabelProps} htmlFor={id} error={!!errorMessage}>
				{label}
			</FormLabel>
			<Input
				{...InputProps}
				id={id}
				type={type}
				value={value}
				name={id}
				error={!!errorMessage}
				autoComplete="off"
			/>
			<FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText>
		</FormControl>
	);
};
