import { Box } from './Box';

export default {
	title: 'Layout/Box',
	component: Box,
};

export const Basic = () => (
	<Box bgColor="salmon" display="inline-block" padding={10} color="white ">
		1
	</Box>
);
