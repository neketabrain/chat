import cn from 'classnames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './IconLinkButton.module.scss';

const IconLinkButton: FC<LinkProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <Link className={cn(styles.iconLinkButton, className)} {...rest}>
      {children}
    </Link>
  );
};

export default IconLinkButton;
