import MuiTypography, { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography';

export type TypographyProps = MuiTypographyProps;

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 * @see Docs https://material-ui.com/components/typography/
 */
export const Typography = ({ children, ...props }: TypographyProps) => {
	return <MuiTypography {...props}>{children}</MuiTypography>;
};
