import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props) => {
  const { className, children, variant = 'primary', type = 'button', ...rest } = props;
  const classNames = cn(styles[`${variant}Button`], className);

  return (
    <button className={classNames} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
