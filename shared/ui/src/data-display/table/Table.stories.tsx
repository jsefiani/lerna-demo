import { Story } from '@storybook/react/types-6-0';
import { Table, TableProps, TableColProps } from './Table';

export default {
	title: 'DataDisplay/Table',
	component: Table,
};

const columns: TableColProps[] = [
	{ field: 'name', headerName: 'Name', flex: 1 },
	{ field: 'emailAddress', headerName: 'Email Address', flex: 1 },
	{ field: 'company', headerName: 'Company', flex: 1 },
	{ field: 'role', headerName: 'Role', flex: 1 },
];

const Template: Story<TableProps> = (args) => {
	return <Table {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
	columns,
	data: [
		{
			id: 1,
			name: 'John',
			emailAddress: 'John@doe.com',
			company: 'Corp',
			role: 'Software Engineer',
		},
	],
};

export const Loading = Template.bind({});
Loading.args = {
	columns,
	isLoading: true,
	data: [
		{
			id: 1,
			name: 'John',
			emailAddress: 'John@doe.com',
			company: 'Corp',
			role: 'Software Engineer',
		},
	],
};
