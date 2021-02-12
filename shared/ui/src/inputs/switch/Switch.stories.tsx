import { Story } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from './Switch';

export default {
	title: 'Inputs/Switch',
	component: Switch,
};

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};
