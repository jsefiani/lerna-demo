import { Container, Form, TextField, useForm, Box, Typography, Button } from '@kontron/ui';
import styled from 'styled-components';

import { useRouter } from '../../shared/hooks';
import kontronLogo from '../../assets/kontron-logo.webp';

type LoginValues = {
	email: string;
	password: string;
};

const Logo = styled.img`
	max-width: 100%;
`;

const validateLoginForm = (values: LoginValues) => {
	const errors: LoginValues = {} as LoginValues;

	if (!values.email) errors.email = 'Email is required';
	if (!values.password) errors.password = 'Password is required';

	return errors;
};

export const LoginPage = () => {
	const router = useRouter();
	const form = useForm<LoginValues>({
		validate: validateLoginForm,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values, helpers) => {
			setTimeout(() => {
				router.push('/auth');
				helpers.setSubmitting(false);
			}, 2000);
		},
	});

	return (
		<Container maxWidth="xs">
			<Box display="flex" flexDirection="column" marginTop={20}>
				<Box width="150px" marginBottom="50px" display="flex" justifyContent="center">
					<Logo src={kontronLogo} />
				</Box>
				<Box marginBottom="20px">
					<Typography variant="h4">Login</Typography>
				</Box>
				<Form onSubmit={form.handleSubmit}>
					<Box display="flex" flexDirection="column">
						<TextField
							id="email"
							label="Email Address"
							placeholder="Email Address"
							value={form.values.email}
							onChange={form.handleChange}
							onBlur={form.handleBlur}
							errorMessage={form.touched.email && form.errors.email ? form.errors.email : undefined}
						/>
						<TextField
							id="password"
							label="Password"
							placeholder="Password"
							type="password"
							value={form.values.password}
							onChange={form.handleChange}
							onBlur={form.handleBlur}
							errorMessage={form.touched.password && form.errors.password ? form.errors.password : undefined}
						/>
					</Box>
					<Box display="flex" marginTop="18px" justifyContent="flex-end">
						<Button
							isLoading={form.isSubmitting}
							loadingText="Signing in..."
							fullWidth
							size="large"
							color="primary"
							type="submit"
						>
							Login
						</Button>
					</Box>
				</Form>
			</Box>
		</Container>
	);
};
