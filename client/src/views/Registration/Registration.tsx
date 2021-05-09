import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Card, H1, TextInput } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Registration.module.scss';

const Registration: FC = () => {
  const { t } = useTranslation('auth');

  return (
    <Card className={styles.card}>
      <H1>{t('registration')}</H1>

      <form>
        <TextInput label={t('username')} placeholder={t('usernamePlaceholder')} className={styles.input} />

        <div className={styles.inputGroup}>
          <TextInput label={t('firstName')} placeholder={t('firstNamePlaceholder')} className={styles.inputItem} />
          <TextInput label={t('lastName')} placeholder={t('lastNamePlaceholder')} className={styles.inputItem} />
        </div>

        <TextInput
          forPassword={true}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
        />
        <TextInput
          forPassword={true}
          label={t('confirmPassword')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
        />
        <Button type="submit" className={styles.button}>
          {t('signUp')}
        </Button>
      </form>

      <p className={styles.link}>
        {t('haveAccount')} <Link to={PATHS.login}>{t('loginNow')}</Link>
      </p>
    </Card>
  );
};

export default Registration;
