import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';

export type SwitchProps = MuiSwitchProps;

export const Switch = (props: SwitchProps) => {
	return <MuiSwitch {...props} />;
};
