import { InputProps } from '../Input/Input.types';

export type TextFieldProps = InputProps & {
  label: string;
  forPassword?: boolean;
};
