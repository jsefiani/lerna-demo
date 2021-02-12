import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

import { AppRoutes, Modules } from './app-routes';
import AppConfig from './app-config.json';
console.log('🚀 ~ file: sidebar-routes.ts ~ line 7 ~ AppConfig', AppConfig);

export type SidebarRoute = {
	path: string;
	label: string;
	Icon: (props: SvgIconProps) => JSX.Element;
	moduleName: keyof typeof Modules;
};

export const SIDEBAR_ROUTES: SidebarRoute[] = [
	{
		path: AppRoutes.FARE_VERSIONS,
		label: 'Fare Management',
		Icon: ConfirmationNumberIcon,
		moduleName: 'FARE',
	},
	{
		path: AppRoutes.RIDER_CUSTOMERS,
		label: 'Rider Management',
		Icon: DirectionsBusIcon,
		moduleName: 'RIDER',
	},
];
