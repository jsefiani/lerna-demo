import { Typography } from './Typography';
import { Container } from '../../layout/container';

export default {
	title: 'DataDisplay/Typography',
	component: Typography,
};

export const Heading1 = () => <Typography variant="h1">Heading 1</Typography>;

export const Heading2 = () => <Typography variant="h2">Heading 2</Typography>;

export const Heading3 = () => <Typography variant="h3">Heading 3</Typography>;

export const Paragraph = () => (
	<Container maxWidth="sm">
		<Typography variant="body1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, excepturi! Magnam nostrum ducimus quis
			nam pariatur veritatis, officia, quibusdam incidunt esse quia laboriosam maxime voluptatum consequatur
			eos numquam. Nihil, illo?
		</Typography>
	</Container>
);
