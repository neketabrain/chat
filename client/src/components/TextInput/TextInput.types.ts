import { TextFieldProps } from '../TextField/TextField.types';

export type TextInputProps = TextFieldProps & {
  label: string;
  forPassword?: boolean;
};
