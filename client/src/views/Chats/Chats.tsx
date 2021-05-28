import cn from 'classnames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import { LogoutIcon, SearchIcon } from 'src/assets';
import { Card, Button, ProfilePreview, ChatList } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Chats.module.scss';

const Chats: FC = () => {
  const { t } = useTranslation('chat');
  const { t: tCommon } = useTranslation('common');
  const history = useHistory();

  const logout = useCallback(() => {
    history.push(PATHS.login);
  }, [history]);

  return (
    <Card className={styles.card}>
      <div className={cn(styles.container, styles.padding)}>
        <div className={styles.header}>
          <ProfilePreview className={styles.profilePreview} />
          <Button className={styles.logout} onClick={logout}>
            <span>{tCommon('logout')}</span>
            <LogoutIcon />
          </Button>
        </div>
      </div>

      <div className={styles.search}>
        <input placeholder={t('selectUser')} />
        <SearchIcon />
      </div>

      <ChatList />
    </Card>
  );
};

export default Chats;
