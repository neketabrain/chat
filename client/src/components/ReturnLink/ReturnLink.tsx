import cn from 'classnames';
import { FC } from 'react';

import { ArrowLeftIcon } from 'src/assets';
import { LinkButton } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './ReturnLink.module.scss';
import { ReturnLinkProps } from './ReturnLink.types';

const ReturnLink: FC<ReturnLinkProps> = (props) => {
  const { className, to = PATHS.root } = props;

  return (
    <LinkButton className={cn(styles.returnLink, className)} to={to} variant="icon">
      <ArrowLeftIcon />
    </LinkButton>
  );
};

export default ReturnLink;
