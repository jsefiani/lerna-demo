import type { Component, FC } from 'react';
import loadable from '@loadable/component';

type Route = {
	path: string;
	Component: FC | typeof Component;
};

export enum Modules {
	FARE = 'fare',
	RIDER = 'rider',
}

type Module = {
	moduleName: keyof typeof Modules;
	pages: Route[];
};

export enum AppRoutes {
	LOGIN = '/login',
	FARE_VERSIONS = '/fare/versions',
	FARE_ACCESS_RULES = '/fare/access-rules',
	RIDER_CUSTOMERS = '/rider/customers',
}

export const APP_MODULES: Module[] = [
	{
		moduleName: 'FARE',
		pages: [
			{
				path: AppRoutes.FARE_VERSIONS,
				Component: loadable((props) => import(`../pages/fare/versions`)),
			},
			{
				path: AppRoutes.FARE_ACCESS_RULES,
				Component: loadable((props) => import(`../pages/fare/access-rules`)),
			},
		],
	},
	{
		moduleName: 'RIDER',
		pages: [
			{
				path: AppRoutes.RIDER_CUSTOMERS,
				Component: loadable((props) => import(`../pages/rider/customers`)),
			},
		],
	},
];
