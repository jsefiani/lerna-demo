import MuiContainer, { ContainerProps as MuiContainerProps } from '@material-ui/core/Container';
import { spacing, SpacingProps, sizing, SizingProps } from '@material-ui/system';
import styled from 'styled-components';

export type ContainerProps = MuiContainerProps & SpacingProps & SizingProps;

/**
 *
 * The container centers your content horizontally. It's the most basic layout element.
 */
export const Container = styled(MuiContainer)<ContainerProps>`
	${spacing}
	${sizing}
`;
