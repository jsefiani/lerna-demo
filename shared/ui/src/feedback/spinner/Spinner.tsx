import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

export type SpinnerProps = CircularProgressProps;

export const Spinner = (props: SpinnerProps) => {
	return <CircularProgress {...props} />;
};
