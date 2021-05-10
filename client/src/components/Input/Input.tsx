import cn from 'classnames';
import { FC } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props;

  return <input className={cn(styles.input, className)} {...rest} />;
};

export default Input;
