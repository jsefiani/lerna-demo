import { Add } from '@material-ui/icons';
import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
	title: 'Inputs/Button',
	component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me!</Button>;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	color: 'primary',
	startIcon: <Add />,
};

export const Loading = Template.bind({});
Loading.args = {
	color: 'primary',
	isLoading: true,
	loadingText: 'Creating account...',
};

export const SpecifySize = Template.bind({});
SpecifySize.args = {
	color: 'primary',
	size: 'large',
};
