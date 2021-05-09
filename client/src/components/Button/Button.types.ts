import { ButtonHTMLAttributes } from 'react';

import { ClassName } from 'src/types';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ClassName & {
    variant?: ButtonVariants;
  };
