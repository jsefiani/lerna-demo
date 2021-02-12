import { Typography, Table as KontronTable, Container, Box, TableColProps, Tag, Switch } from '@kontron/ui';
import styled from 'styled-components';

const columns: TableColProps[] = [
	{
		field: 'isActivated',
		width: 100,
		renderHeader: () => <span></span>,
		renderCell: (props) => <Switch color="primary" checked={props.row.isActivated} />,
	},
	{ field: 'version', headerName: 'Version Number', flex: 1 },
	{
		field: 'isPublished',
		headerName: 'Status',
		flex: 1,
		renderCell: (props) => {
			const isPublished = props.row.isPublished;
			return (
				<Tag label={isPublished ? 'Published' : 'Working'} color={isPublished ? 'primary' : 'default'} />
			);
		},
	},
];

const Table = styled(KontronTable)`
	height: 1000px;
`;

export const VersionsPage = () => {
	return (
		<Container maxWidth="xl">
			<Box bgColor="white" margin="20px 0" padding="25px" display="flex" flexDirection="column">
				<Box marginTop="20px" marginBottom="30px">
					<Typography variant="h4">Fare - Versions</Typography>
				</Box>
				<Box flexGrow={1} minHeight="800px">
					<Table
						autoHeight
						columns={columns}
						data={[
							{
								id: 1,
								version: 'GHYDL68',
								isPublished: true,
								isActivated: true,
							},
							{
								id: 2,
								version: 'KLMYT15',
								isPublished: false,
								isActivated: false,
							},
							{
								id: 3,
								version: 'YUQOP23',
								isPublished: false,
								isActivated: false,
							},
						]}
					/>
				</Box>
			</Box>
		</Container>
	);
};
