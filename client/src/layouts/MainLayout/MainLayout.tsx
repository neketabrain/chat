import { FC } from 'react';

import styles from './MainLayout.module.scss';

const MainLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
