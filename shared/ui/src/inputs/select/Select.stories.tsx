import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Select, SelectProps } from './Select';

export default {
	title: 'Inputs/Select',
	component: Select,
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;

const OPTIONS = [
	{ label: 'Naruto', value: 'naruto' },
	{ label: 'Sasuke', value: 'sasuke' },
];

export const Basic = Template.bind({});
Basic.args = {
	options: OPTIONS,
	defaultValue: 'naruto',
};

export const Controlled = (props: SelectProps) => {
	const [selectedOption, setSelectedOption] = React.useState('naruto');

	return (
		<Select
			{...props}
			options={OPTIONS}
			value={selectedOption}
			onChange={(e) => setSelectedOption(e.target.value as string)}
		/>
	);
};
