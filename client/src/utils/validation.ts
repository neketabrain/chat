import i18n from 'src/i18n';

export const getRequiredError = (): string => {
  return i18n.t('auth:errors.required');
};

export const getMinPasswordError = (num: number): string => {
  return i18n.t('auth:errors.minPassword', { num });
};
