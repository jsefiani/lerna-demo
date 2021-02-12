import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@material-ui/pickers';

export type DatePickerProps = MuiDatePickerProps;

/**
 * @see Docs https://material-ui-pickers.dev/demo/datepicker
 */
export const DatePicker = ({
	variant = 'inline',
	format = 'yyyy/MM/dd',
	disableToolbar = true,
	...props
}: DatePickerProps) => {
	return <MuiDatePicker {...props} variant={variant} disableToolbar={disableToolbar} format={format} />;
};
