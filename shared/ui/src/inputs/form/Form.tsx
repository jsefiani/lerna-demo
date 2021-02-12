import * as React from 'react';
import { useFormik, FormikConfig as UseFormikFormProps } from 'formik';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export type UseFormProps<T> = UseFormikFormProps<T>;

export const useForm = <T extends object>(props: UseFormProps<T>) => {
	return useFormik<T>(props);
};

export const Form = ({ children, ...props }: FormProps) => {
	return <form {...props}>{children}</form>;
};
