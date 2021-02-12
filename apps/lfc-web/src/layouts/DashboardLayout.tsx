import * as React from 'react';
import { Box, Typography } from '@kontron/ui';
import styled from 'styled-components';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

import kontronLogo from '../assets/kontron-logo.webp';
import { SIDEBAR_ROUTES } from '../config/sidebar-routes';
import { useModulesConfig } from 'src/App';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-rows: 70px 1fr;
	grid-template-areas:
		'sidenav header'
		'sidenav main'
		'sidenav main';
	height: 100vh;
`;

const Sidebar = styled.div`
	grid-area: sidenav;
	display: flex;
	flex-direction: column;
	border-right: 2px solid #f2f2f4;
`;

const Logo = styled.img`
	max-width: 100%;
`;

const Main = styled.div`
	grid-area: main;
	background-color: #f4f5f7;
	height: 100%;
	overflow-y: scroll;
`;

const Header = styled.div`
	grid-area: header;
	box-shadow: 0 10px 0px 0 rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 4em;
	border-bottom: 2px solid #f2f2f4;
`;

const NavItems = styled.ul`
	list-style: none;
	padding: 0;
`;

const NavLink = styled(RouterNavLink)`
	text-decoration: none;
	font-size: 1.2em;
	color: #141414;
	margin: 0.5em;
	padding: 1em 2em;
	display: flex;
	transition: all 0.2s;

	&:hover {
		background-color: #f4f5f7;
		border-radius: 10px;
	}

	&.active {
		color: #0c0c0c;
		background-color: #f4f5f7;
		border-radius: 10px;
		font-weight: bolder;
	}
`;

export const DashboardLayout = ({ children, ...props }: DashboardLayoutProps) => {
	const { modulesConfig } = useModulesConfig();
	return (
		<Grid>
			<Sidebar>
				<Box width="150px" marginLeft="45px" marginBottom="40px">
					<Link to="/">
						<Logo src={kontronLogo} alt="Kontron Logo" />
					</Link>
				</Box>
				<NavItems>
					{SIDEBAR_ROUTES.map(({ label, path, Icon, moduleName }, index) => {
						if (!modulesConfig.includes(moduleName)) return null;
						return (
							<Box marginBottom="5px" key={index}>
								<NavLink exact key={index} to={path} activeClassName="active">
									<Box marginRight="20px" display="flex" alignItems="center">
										<Icon />
									</Box>
									<Typography variant="body1" color="inherit">
										{label}
									</Typography>
								</NavLink>
							</Box>
						);
					})}
				</NavItems>
			</Sidebar>
			<Header>Hey, Jawad!</Header>
			<Main>{children}</Main>
		</Grid>
	);
};
