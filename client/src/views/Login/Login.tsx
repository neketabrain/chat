import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Card, H1, TextInput } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Login.module.scss';

const Login: FC = () => {
  const { t } = useTranslation('auth');

  return (
    <Card className={styles.card}>
      <H1>{t('login')}</H1>

      <form>
        <TextInput label={t('username')} placeholder={t('usernamePlaceholder')} className={styles.input} />
        <TextInput
          forPassword={true}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
        />
        <Button type="submit" className={styles.button}>
          {t('signIn')}
        </Button>
      </form>

      <p className={styles.link}>
        {t('haventAccount')} <Link to={PATHS.registration}>{t('signupNow')}</Link>
      </p>
    </Card>
  );
};

export default Login;