import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, hasError, ...rest } = props;

  return <input className={cn(styles.input, className, hasError && styles.error)} ref={ref} {...rest} />;
});

export default Input;
