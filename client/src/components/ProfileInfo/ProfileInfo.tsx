import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ProfileInfo.module.scss';

const ProfileInfo: FC = () => {
  const { t } = useTranslation('profile');

  return (
    <div className={styles.profileInfo}>
      <p className={styles.label}>{t('username')}:</p>
      <p>@neketabrain</p>

      <p className={styles.label}>{t('email')}:</p>
      <p>karapuzov.nikita@gmail.com</p>

      <p className={styles.label}>{t('birthdate')}:</p>
      <p>30.01.1999</p>
    </div>
  );
};

export default ProfileInfo;
