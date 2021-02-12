import {
	palette,
	PaletteProps,
	spacing,
	SpacingProps,
	border,
	BordersProps,
	sizing,
	SizingProps,
	flexbox,
	FlexboxProps,
	display,
	DisplayProps,
} from '@material-ui/system';
import styled from 'styled-components';

export type BoxProps = Omit<PaletteProps, 'bgcolor'> &
	SpacingProps &
	BordersProps &
	SizingProps &
	FlexboxProps &
	DisplayProps & {
		bgColor?: string;
	};

/**
 *
 * The Box component wraps your component.
 * It creates a new DOM element, a `<div>` by default that can be changed with the component property.
 * Let's say you want to use a `<span>` instead:
 * ```
 * <Box margin={1} as="span">
 * 	<Button />
 * </Box>
 * ```
 */
export const Box = styled.div<BoxProps>`
	${palette}
	${spacing}
	${border}
	${sizing}
	${flexbox}
	${display}
	background-color: ${(props) => props.bgColor}
`;
