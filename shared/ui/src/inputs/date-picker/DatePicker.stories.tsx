import * as React from 'react';
import { DatePicker, DatePickerProps } from './DatePicker';

export default {
	title: 'Inputs/DatePicker',
	component: DatePicker,
};

export const Basic = (props: DatePickerProps) => {
	const [selectedDate, handleDateChange] = React.useState(new Date());

	return <DatePicker {...props} value={selectedDate} onChange={handleDateChange} />;
};
