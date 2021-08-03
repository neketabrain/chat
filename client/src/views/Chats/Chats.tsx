import cn from 'classnames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LogoutIcon, SearchIcon } from 'src/assets';
import { Card, Button, ProfilePreview, ChatList } from 'src/components';
import { removeToken } from 'src/services';
import { clearUserStateAction, getUserInfoState } from 'src/store/user';

import styles from './Chats.module.scss';

const Chats: FC = () => {
  const { t } = useTranslation('chat');
  const { t: tCommon } = useTranslation('common');

  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfoState);

  const logout = useCallback(() => {
    removeToken();
    dispatch(clearUserStateAction());
  }, [dispatch]);

  return (
    <Card className={styles.card}>
      <div className={cn(styles.container, styles.padding)}>
        <div className={styles.header}>
          <ProfilePreview userInfo={userInfo} className={styles.profilePreview} />
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
