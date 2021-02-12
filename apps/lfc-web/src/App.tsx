import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { APP_MODULES, Modules } from './config/app-routes';
import LoginPage from './pages/login';
import { DashboardLayout } from './layouts';
import { AuthPage } from './pages/auth';
import AppConfig from './config/app-config.json';

// const ALLOWED_MODULES: (keyof typeof Modules)[] = ['FARE', 'RIDER'];

type ModulesConfigContextProps = {
	modulesConfig: (keyof typeof Modules)[];
};

export const ModulesConfigContext = React.createContext<ModulesConfigContextProps>({
	modulesConfig: [],
});

export const ModulesConfigProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const modulesConfig = AppConfig.modules
		.map((module) => (module.isEnabled ? module.name : false))
		.filter(Boolean) as (keyof typeof Modules)[];

	React.useEffect(() => {
		console.log('App config changed!');
	}, [AppConfig]);

	console.log('🚀 ~ file: App.tsx ~ line 28 ~ modulesConfig ~ modulesConfig', modulesConfig);

	return <ModulesConfigContext.Provider value={{ modulesConfig }}>{children}</ModulesConfigContext.Provider>;
};

export const useModulesConfig = () => {
	return React.useContext(ModulesConfigContext);
};

function App() {
	return (
		<ModulesConfigProvider>
			<Router>
				<Switch>
					{APP_MODULES.map(({ moduleName, pages }) => {
						const module = AppConfig.modules.find((module) => module.name === moduleName);
						const isModuleAllowed = module?.isEnabled;

						if (!isModuleAllowed) return null;

						return pages.map(({ path, Component }) => {
							return (
								<Route
									exact
									path={path}
									component={() => (
										<DashboardLayout>
											<Component />
										</DashboardLayout>
									)}
								/>
							);
						});
					})}
					<Route exact path="/" component={DashboardLayout} />
					<Route exact path="/login" component={LoginPage} />
					<Route path="/auth" component={AuthPage} />
				</Switch>
			</Router>
		</ModulesConfigProvider>
	);
}

export default App;
