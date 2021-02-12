import MuiButtonGroup, { ButtonGroupProps as MuiButtonGroupProps } from '@material-ui/core/ButtonGroup';

export type ButtonGroupProps = MuiButtonGroupProps;

/**
 * The ButtonGroup component can be used to group related buttons.
 * @see Docs https://material-ui.com/components/button-group/
 */
export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
	return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
};
