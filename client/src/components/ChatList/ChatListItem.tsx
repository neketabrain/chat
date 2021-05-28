import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './ChatList.module.scss';

const ChatListItem: FC = () => {
  const { t } = useTranslation('chat');
  const { t: tCommon } = useTranslation('common');

  return (
    <li className={styles.chatListItem}>
      <LinkButton className={styles.chatLink} to={`${PATHS.chats}/1`} variant="icon">
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <img
              src="https://all-episodes.org/images/Avatar_img/Avatar-S01E03m.jpg"
              alt={tCommon('avatar')}
              className={styles.img}
            />
            {/* <div className={styles.defaultAvatar}>AS</div> */}
          </div>

          <div>
            <p className={styles.name}>Andrew Stark</p>
            <p className={styles.message}>{t('you')}: Hi there</p>
          </div>
        </div>

        <div className={styles.indicator} />
      </LinkButton>
    </li>
  );
};

export default ChatListItem;
