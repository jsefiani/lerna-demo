import {
	DateTimePicker as MuiDateTimePicker,
	DateTimePickerProps as MuiDateTimePickerProps,
} from '@material-ui/pickers';

export type DateTimePickerProps = MuiDateTimePickerProps;

/**
 * @see Docs https://material-ui-pickers.dev/getting-started/usage
 */
export const DateTimePicker = ({
	variant = 'inline',
	disableToolbar = true,
	format = 'yyyy/MM/dd hh:mm',
	...props
}: DateTimePickerProps) => {
	return <MuiDateTimePicker {...props} variant={variant} disableToolbar={disableToolbar} format={format} />;
};
