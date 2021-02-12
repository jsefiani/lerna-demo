import * as React from 'react';

import { Form, useForm } from './Form';
import { TextField } from '../text-field';
import { Button } from '../button';
import { Container, Box } from '../../layout';

export default {
	title: 'Inputs/Form',
	component: Form,
};

type FormValues = {
	firstName: string;
	lastName: string;
};

const validate = (values: FormValues) => {
	const errors: FormValues = {} as FormValues;

	if (!values.firstName) {
		errors.firstName = 'First name is required';
	}

	if (!values.lastName) {
		errors.lastName = 'Last name is required';
	}

	return errors;
};

export const Basic = () => {
	const form = useForm<FormValues>({
		validate,
		initialValues: {
			firstName: '',
			lastName: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Container maxWidth="xs">
			<Form onSubmit={form.handleSubmit}>
				<Box display="flex" flexDirection="column" alignItems="right">
					<TextField
						id="firstName"
						value={form.values.firstName}
						label="First Name"
						placeholder="First Name"
						onChange={form.handleChange}
						onBlur={form.handleBlur}
						errorMessage={form.touched.firstName && form.errors.firstName}
					/>
					<TextField
						id="lastName"
						value={form.values.lastName}
						label="Last Name"
						placeholder="Last Name"
						onChange={form.handleChange}
						onBlur={form.handleBlur}
						errorMessage={form.touched.lastName && form.errors.lastName}
					/>
				</Box>
				<Box textAlign="right" marginTop="10px">
					<Button color="primary" type="submit">
						Submit
					</Button>
				</Box>
			</Form>
		</Container>
	);
};
