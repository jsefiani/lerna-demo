import { Story } from '@storybook/react/types-6-0';
import { Spinner, SpinnerProps } from './Spinner';

export default {
	title: 'Feedback/Spinner',
	component: Spinner,
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomizeSize = Template.bind({});
CustomizeSize.args = {
	size: '4em',
};
