import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from '../Button/Button.module.scss';

import styles from './LinkButton.module.scss';
import { LinkButtonProps } from './LinkButton.types';

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { className, children, variant = 'primary', ...rest } = props;
  const classNames = cn(styles.link, buttonStyles[`${variant}Button`], className);

  return (
    <Link className={classNames} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
