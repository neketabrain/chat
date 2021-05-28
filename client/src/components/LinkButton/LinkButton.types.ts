import { LinkProps } from 'react-router-dom';

import { ClassName, ButtonVariants } from 'src/types';

export type LinkButtonProps = LinkProps &
  ClassName & {
    variant?: ButtonVariants;
  };
