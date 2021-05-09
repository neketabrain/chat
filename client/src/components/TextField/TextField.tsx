import cn from 'classnames';
import { FC } from 'react';

import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

const TextField: FC<TextFieldProps> = (props) => {
  const { className, ...rest } = props;

  return <input className={cn(styles.textField, className)} {...rest} />;
};

export default TextField;
