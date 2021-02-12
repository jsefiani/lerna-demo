import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { RadioGroup, RadioGroupProps } from './Radio';

export default {
	title: 'Inputs/RadioGroup',
	component: RadioGroup,
};

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	defaultValue: 'naruto',
	options: [
		{ label: 'Naruto', value: 'naruto' },
		{ label: 'Sasuke', value: 'sasuke' },
	],
};

export const Controlled = (args: RadioGroupProps) => {
	const [option, setOption] = React.useState<string>('naruto');

	return (
		<>
			<RadioGroup
				{...args}
				value={option}
				onChange={(e) => setOption(e.currentTarget.value)}
				options={[
					{ label: 'Naruto', value: 'naruto' },
					{ label: 'Sasuke', value: 'sasuke' },
				]}
			/>
			<p>Selected value: {option}</p>
		</>
	);
};
