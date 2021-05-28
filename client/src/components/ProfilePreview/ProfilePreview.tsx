import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './ProfilePreview.module.scss';
import { ProfilePreviewProps } from './ProfilePreview.types';

const ProfilePreview: FC<ProfilePreviewProps> = (props) => {
  const { withStatus, className, link = PATHS.profile } = props;

  const { t } = useTranslation('profile');

  return (
    <div className={cn(styles.profileInfo, className)}>
      <LinkButton to={link} className={styles.imageLink} variant="icon">
        <div className={styles.imageContainer}>
          {/* <img src="" alt={t('avatar')} className={styles.img} /> */}
          <div className={styles.defaultAvatar}>NK</div>
        </div>
      </LinkButton>

      <div>
        <p className={styles.name}>Nikita Karapuzov</p>
        {withStatus && <p className={styles.online}>{t('online')}</p>}
      </div>
    </div>
  );
};

export default ProfilePreview;
