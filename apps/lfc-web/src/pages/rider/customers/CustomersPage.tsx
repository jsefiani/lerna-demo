import { Typography, Table as KontronTable, Container, Box, TableColProps } from '@kontron/ui';
import styled from 'styled-components';

const columns: TableColProps[] = [
	{ field: 'firstName', headerName: 'First Name', flex: 1 },
	{ field: 'lastName', headerName: 'Last Name', flex: 1 },
	{ field: 'email', headerName: 'Email Address', flex: 1 },
];

const Table = styled(KontronTable)`
	height: 1000px;
`;

export const CustomersPage = () => {
	return (
		<Container maxWidth="xl">
			<Box bgColor="white" margin="20px 0" padding="25px" display="flex" flexDirection="column">
				<Box marginTop="20px" marginBottom="30px">
					<Typography variant="h4">Customers</Typography>
				</Box>
				<Box flexGrow={1} minHeight="800px">
					<Table
						autoHeight
						columns={columns}
						data={[
							{
								id: 1,
								firstName: 'John',
								lastName: 'Doe',
								email: 'john@test.com',
							},
							{
								id: 2,
								firstName: 'John',
								lastName: 'Doe',
								email: 'john@test.com',
							},
							{
								id: 3,
								firstName: 'John',
								lastName: 'Doe',
								email: 'john@test.com',
							},
						]}
					/>
				</Box>
			</Box>
		</Container>
	);
};
