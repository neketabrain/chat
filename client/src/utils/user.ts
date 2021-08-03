import { UserInfo } from 'src/services';

export const getUserInitials = (userInfo?: UserInfo): string => {
  if (!userInfo) {
    return '';
  }

  return `${userInfo.firstname[0] || ''}${userInfo.lastname[0] || ''}`;
};
