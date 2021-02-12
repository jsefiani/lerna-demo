import * as React from 'react';
import { TimePicker, TimePickerProps } from './TimePicker';

export default {
	title: 'Inputs/TimePicker',
	component: TimePicker,
};

export const Basic = (props: TimePickerProps) => {
	const [selectedDate, handleDateChange] = React.useState(new Date());

	return <TimePicker {...props} value={selectedDate} onChange={handleDateChange} />;
};
