import { Story } from '@storybook/react/types-6-0';
import { Container, ContainerProps } from './Container';

export default {
	title: 'Layout/Container',
	component: Container,
};

const Template: Story<ContainerProps> = (args) => (
	<Container {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
		ea commodo consequat.
	</Container>
);

export const Default = Template.bind({});
Default.args = {
	maxWidth: 'sm',
};
