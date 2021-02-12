import { TimePicker as MuiTimePicker, TimePickerProps as MuiTimePickerProps } from '@material-ui/pickers';

export type TimePickerProps = MuiTimePickerProps;

/**
 * @see Docs https://material-ui-pickers.dev/demo/timepicker
 */
export const TimePicker = ({ variant = 'inline', disableToolbar = true, ...props }: TimePickerProps) => {
	return <MuiTimePicker {...props} variant={variant} disableToolbar={disableToolbar} />;
};
