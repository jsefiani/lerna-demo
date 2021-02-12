import MuiFormHelperText, {
	FormHelperTextProps as MuiFormHelperTextProps,
} from '@material-ui/core/FormHelperText';
import styled from 'styled-components';

export type FormHelperTextProps = MuiFormHelperTextProps;

const FormHelperTextWrapper = styled(MuiFormHelperText)`
	position: absolute;
	bottom: -20px;
`;

export const FormHelperText = ({ children, ...props }: FormHelperTextProps) => {
	return <FormHelperTextWrapper {...props}>{children}</FormHelperTextWrapper>;
};
