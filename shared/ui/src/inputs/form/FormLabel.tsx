import MuiFormLabel, { FormLabelProps as MuiFormLabelProps } from '@material-ui/core/FormLabel';
import styled from 'styled-components';

export type FormLabelProps = MuiFormLabelProps;

const FormLabelWrapper = styled(MuiFormLabel)`
	margin-bottom: 0.5rem;
`;

export const FormLabel = ({ children, ...props }: FormLabelProps) => {
	return <FormLabelWrapper {...props}>{children}</FormLabelWrapper>;
};
