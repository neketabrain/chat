import cn from 'classnames';
import { FC } from 'react';

import { ClassName } from 'src/types';

import styles from './H1.module.scss';

const H1: FC<ClassName> = (props) => {
  const { className, children } = props;

  return <h1 className={cn(styles.h1, className)}>{children}</h1>;
};

export default H1;
