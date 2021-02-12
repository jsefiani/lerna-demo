import MuiRadio, { RadioProps as MuiRadioProps } from '@material-ui/core/Radio';
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

export type RadioProps = MuiRadioProps;
export type RadioGroupProps = MuiRadioGroupProps & {
	options: RadioGroupOption[];
};
export type RadioGroupOption = {
	label: string;
	value: string | number | readonly string[];
};

export const Radio = (props: RadioProps) => {
	return <MuiRadio {...props} />;
};

/**
 * Use radio buttons when the user needs to see all available options.
 * If available options can be collapsed, consider using a dropdown menu because it uses less space.
 * Radio buttons should have the most commonly used option selected by default.
 * @see Docs https://material-ui.com/components/radio-buttons/
 */
export const RadioGroup = ({ options, ...props }: RadioGroupProps) => {
	return (
		<MuiRadioGroup {...props}>
			{options?.map(({ label, value }) => {
				return <MuiFormControlLabel label={label} value={value} control={<Radio />} />;
			})}
		</MuiRadioGroup>
	);
};
