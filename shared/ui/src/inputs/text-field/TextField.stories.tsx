import * as React from 'react';

import { TextField } from './TextField';

export default {
	title: 'Inputs/TextField',
	component: TextField,
};

export const Basic = () => {
	return <TextField label="First Name" id="firstName" placeholder="First Name" />;
};

export const Error = () => {
	return (
		<TextField
			id="lastName"
			label="Last Name"
			placeholder="Last Name"
			errorMessage="Please provide your last name."
		/>
	);
};

export const Required = () => {
	return <TextField id="lastName" label="Last Name" placeholder="Last Name" required />;
};
