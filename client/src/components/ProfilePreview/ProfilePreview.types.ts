import { UserInfo } from 'src/services';
import { ClassName } from 'src/types';

export type ProfilePreviewProps = ClassName & {
  userInfo?: UserInfo;
  withStatus?: boolean;
  link?: string;
};
