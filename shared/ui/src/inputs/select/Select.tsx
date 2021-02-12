import MuiSelect, { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import MuiSelectOption from '@material-ui/core/MenuItem';

export type SelectProps = MuiSelectProps & {
	options: SelectOption[];
};

export type SelectOption = {
	label: string;
	value: string | number | readonly string[] | undefined;
};

export const Select = ({ options, ...props }: SelectProps) => {
	return (
		<MuiSelect {...props}>
			{options.map(({ value, label }) => {
				return <MuiSelectOption value={value}>{label}</MuiSelectOption>;
			})}
		</MuiSelect>
	);
};
