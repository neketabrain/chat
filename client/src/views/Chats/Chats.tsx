import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import { LogoutIcon, SearchIcon } from 'src/assets';
import { Card, Button, ProfilePreview } from 'src/components';
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
    <Card>
      <div className={styles.header}>
        <ProfilePreview />
        <Button className={styles.logout} onClick={logout}>
          <span>{tCommon('logout')}</span>
          <LogoutIcon />
        </Button>
      </div>

      <div className={styles.search}>
        <input placeholder={t('selectUser')} />
        <SearchIcon />
      </div>
    </Card>
  );
};

export default Chats;
