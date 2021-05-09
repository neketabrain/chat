import cn from 'classnames';
import { FC } from 'react';

import { ClassName } from 'src/types';

import styles from './Card.module.scss';

const Card: FC<ClassName> = (props) => {
  const { className, children } = props;

  return <div className={cn(styles.card, className)}>{children}</div>;
};

export default Card;
