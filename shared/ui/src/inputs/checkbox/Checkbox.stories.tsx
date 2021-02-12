import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};
