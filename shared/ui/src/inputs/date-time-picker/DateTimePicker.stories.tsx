import * as React from 'react';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';

export default {
	title: 'Inputs/DateTimePicker',
	component: DateTimePicker,
};

export const Basic = (props: DateTimePickerProps) => {
	const [selectedDate, handleDateChange] = React.useState(new Date());

	return <DateTimePicker {...props} value={selectedDate} onChange={handleDateChange} />;
};
