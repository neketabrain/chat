import { ButtonHTMLAttributes } from 'react';

import { ClassName, ButtonVariants } from 'src/types';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ClassName & {
    variant?: ButtonVariants;
  };
