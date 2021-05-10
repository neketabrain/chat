import { FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, H1, TextField } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Login.module.scss';

const Login: FC = () => {
  const { t } = useTranslation('auth');
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(PATHS.root);
  };

  return (
    <Card className={styles.card}>
      <H1>{t('login')}</H1>

      <form onSubmit={handleSubmit}>
        <TextField label={t('username')} placeholder={t('usernamePlaceholder')} className={styles.input} />
        <TextField
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
