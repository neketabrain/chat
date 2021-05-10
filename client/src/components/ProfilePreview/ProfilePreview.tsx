import cn from 'classnames';
import { FC } from 'react';

import styles from './ProfilePreview.module.scss';
import { ProfilePreviewProps } from './ProfilePreview.types';

const ProfilePreview: FC<ProfilePreviewProps> = (props) => {
  const { withStatus, className } = props;

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.imageContainer}>
        {/* <img src="/" alt="avatar" className={styles.img} /> */}
        <div className={styles.defaultAvatar}>NK</div>
      </div>

      <div>
        <p className={styles.name}>Nikita Karapuzov</p>
        {withStatus && <p className={styles.online}>Active now</p>}
      </div>
    </div>
  );
};

export default ProfilePreview;
