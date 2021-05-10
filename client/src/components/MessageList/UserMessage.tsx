import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from 'src/constants';

import styles from './MessageList.module.scss';

const UserMessage: FC = (props) => {
  const { children } = props;
  const { t } = useTranslation('common');

  return (
    <li className={styles.userMessageItem}>
      <Link to={`${PATHS.user}/1`} className={styles.avatarLink}>
        <img
          src="https://all-episodes.org/images/Avatar_img/Avatar-S01E03m.jpg"
          alt={t('avatar')}
          className={styles.avatar}
        />
        {/* <div className={styles.defaultAvatar}>AS</div> */}
      </Link>
      <p className={styles.message}>{children}</p>
    </li>
  );
};

export default UserMessage;
