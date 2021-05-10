import { FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, H1, TextField } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Registration.module.scss';

const Registration: FC = () => {
  const { t } = useTranslation('auth');
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(PATHS.root);
  };

  return (
    <Card className={styles.card}>
      <H1>{t('registration')}</H1>

      <form onSubmit={handleSubmit}>
        <TextField label={t('username')} placeholder={t('usernamePlaceholder')} className={styles.input} />

        <div className={styles.inputGroup}>
          <TextField label={t('firstName')} placeholder={t('firstNamePlaceholder')} className={styles.inputItem} />
          <TextField label={t('lastName')} placeholder={t('lastNamePlaceholder')} className={styles.inputItem} />
        </div>

        <TextField
          forPassword={true}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
        />
        <TextField
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