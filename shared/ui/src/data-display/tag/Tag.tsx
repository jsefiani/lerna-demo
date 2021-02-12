import MuiTag, { ChipProps as MuiTagProps } from '@material-ui/core/Chip';

export type TagProps = MuiTagProps;

export const Tag = ({ children, ...props }: TagProps) => {
	return <MuiTag {...props} />;
};
