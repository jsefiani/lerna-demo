import * as React from 'react';
import { Box, Spinner, Typography } from '@kontron/ui';
import styled from 'styled-components';

import kontronLogo from '../../assets/kontron-logo.webp';
import { useRouter } from '../../shared/hooks';

const Logo = styled.img`
	max-width: 100%;
	height: auto;
	width: 100px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80% 20%;
	grid-template-areas:
		'main'
		'footer';
	height: 100vh;
`;

const Main = styled(Box)`
	grid-area: main;
`;

const Footer = styled(Box)`
	grid-area: footer;
`;

export const AuthPage = () => {
	const router = useRouter();

	React.useEffect(() => {
		setTimeout(() => {
			router.push('/fare/versions');
		}, 2500);
	}, []);

	return (
		<Grid>
			<Main display="flex" justifyContent="center" alignItems="center" flexDirection="column">
				<Spinner />
				<Box marginTop="50px">
					<Typography variant="body1">Loading the LFC Mobiguider experience.</Typography>
				</Box>
			</Main>
			<Footer display="flex" justifyContent="center" alignItems="center">
				<Logo src={kontronLogo} alt="Kontron Logo" />
			</Footer>
		</Grid>
	);
};
