import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from 'src/components';
import { PATHS } from 'src/constants';
import { getUserInitials } from 'src/utils';

import styles from './ProfilePreview.module.scss';
import { ProfilePreviewProps } from './ProfilePreview.types';

const ProfilePreview: FC<ProfilePreviewProps> = (props) => {
  const { userInfo, withStatus, className, link = PATHS.profile } = props;
  const { firstname, lastname } = userInfo || {};

  const { t } = useTranslation('profile');

  return (
    <div className={cn(styles.profileInfo, className)}>
      <LinkButton to={link} className={styles.imageLink} variant="icon">
        <div className={styles.imageContainer}>
          {!userInfo?.avatar && <div className={styles.defaultAvatar}>{getUserInitials(userInfo)}</div>}
          {!!userInfo?.avatar && <img src={userInfo.avatar} alt={t('avatar')} className={styles.img} />}
        </div>
      </LinkButton>

      <div className={styles.nameBlock}>
        <p className={styles.name}>
          {firstname || ''} {lastname || ''}
        </p>
        {withStatus && <p className={styles.online}>{t('online')}</p>}
      </div>
    </div>
  );
};

export default ProfilePreview;
