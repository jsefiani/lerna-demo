import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';

export type CheckboxProps = MuiCheckboxProps;

export const Checkbox = (props: CheckboxProps) => {
	return <MuiCheckbox {...props} />;
};
