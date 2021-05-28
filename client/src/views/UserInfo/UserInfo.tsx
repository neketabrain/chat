import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { Card, ProfilePreview, LinkButton, ProfileInfo, ReturnLink } from 'src/components';
import { PATHS } from 'src/constants';
import { RouterIdParam } from 'src/types';

import styles from './UserInfo.module.scss';
import { UserInfoProps } from './UserInfo.types';

const UserInfo: FC<UserInfoProps> = (props) => {
  const { isOtherUser } = props;

  const { t } = useTranslation('profile');
  const { id } = useParams<RouterIdParam>();

  const returnLink = isOtherUser ? `${PATHS.chats}/${id}` : PATHS.chats;
  const profileLink = isOtherUser ? `${PATHS.users}/${id}` : PATHS.profile;
  const buttonLink = isOtherUser ? `${PATHS.chats}/${id}` : PATHS.editProfile;

  return (
    <Card>
      <div className={styles.header}>
        <ReturnLink className={styles.return} to={returnLink} />
        <ProfilePreview withStatus={isOtherUser} link={profileLink} />
        <LinkButton to={buttonLink} className={styles.button}>
          {isOtherUser ? t('sendMessage') : t('edit')}
        </LinkButton>
      </div>

      <div className={styles.info}>
        <ProfileInfo />
      </div>
    </Card>
  );
};

export default UserInfo;
