import cn from 'classnames';
import { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from 'src/constants';

import styles from './ProfilePreview.module.scss';
import { ProfilePreviewProps } from './ProfilePreview.types';

const ProfilePreview: FC<ProfilePreviewProps> = (props) => {
  const { withStatus, className, link = PATHS.profile } = props;
  // const { t } = useTranslation('common');

  return (
    <div className={cn(styles.container, className)}>
      <Link to={link} className={styles.link}>
        <div className={styles.imageContainer}>
          {/* <img src="" alt={t('avatar')} className={styles.img} /> */}
          <div className={styles.defaultAvatar}>NK</div>
        </div>

        <div>
          <p className={styles.name}>Nikita Karapuzov</p>
          {withStatus && <p className={styles.online}>Active now</p>}
        </div>
      </Link>
    </div>
  );
};

export default ProfilePreview;
