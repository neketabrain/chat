import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ProfileInfo.module.scss';

const ProfileInfo: FC = () => {
  const { t } = useTranslation('profile');

  return (
    <div className={styles.profileInfo}>
      <p className={styles.label}>
        {t('username')}
        <span className={styles.colon}>:</span>
      </p>
      <p className={styles.value}>@neketabrain</p>

      <p className={styles.label}>
        {t('email')}
        <span className={styles.colon}>:</span>
      </p>
      <p className={styles.value}>karapuzov.nikita@gmail.com</p>

      <p className={styles.label}>
        {t('birthdate')}
        <span className={styles.colon}>:</span>
      </p>
      <p className={styles.value}>30.01.1999</p>
    </div>
  );
};

export default ProfileInfo;
