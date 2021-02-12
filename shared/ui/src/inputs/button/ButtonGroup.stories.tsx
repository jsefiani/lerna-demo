import { Story } from '@storybook/react/types-6-0';
import { Button } from './Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export default {
	title: 'Inputs/ButtonGroup',
	component: ButtonGroup,
};

const Template: Story<ButtonGroupProps> = (args) => (
	<ButtonGroup {...args}>
		<Button>One</Button>
		<Button>Two</Button>
		<Button>Three</Button>
	</ButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
};
