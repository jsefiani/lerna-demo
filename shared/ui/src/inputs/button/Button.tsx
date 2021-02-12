import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

import { Spinner } from '../../feedback/spinner';

export type ButtonProps = MuiButtonProps & {
	loadingText?: string;
	isLoading?: boolean;
};

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * @see Docs https://material-ui.com/components/buttons/
 */
export const Button = ({
	children,
	isLoading,
	loadingText,
	disabled,
	startIcon,
	variant = 'contained',
	...props
}: ButtonProps) => {
	return (
		<MuiButton
			{...props}
			disabled={isLoading ? true : disabled}
			startIcon={isLoading ? <Spinner size=".75em" color="inherit" /> : startIcon}
			variant={variant}
			disableRipple
		>
			{isLoading ? loadingText : children}
		</MuiButton>
	);
};
