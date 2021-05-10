import { FC } from 'react';

import styles from './MessageList.module.scss';

const MyMessage: FC = (props) => {
  const { children } = props;

  return (
    <li className={styles.myMessageItem}>
      <p className={styles.message}>{children}</p>
    </li>
  );
};

export default MyMessage;
