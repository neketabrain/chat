import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AlertIcon } from 'src/assets';
import { Button, Card, H1, TextField } from 'src/components';
import { PATHS } from 'src/constants';
import { LoginRequest, login } from 'src/services';
import { getUserInfo } from 'src/services/users';
import { setUserStateAction } from 'src/store/user';

import { loginSchema } from './Login.constants';
import styles from './Login.module.scss';

const Login: FC = () => {
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState<Record<string, string> | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values: LoginRequest) => {
    setLoading(true);
    setServerErrors(null);

    try {
      await login(values);
      const { data } = await getUserInfo();
      dispatch(setUserStateAction(data));
    } catch (error) {
      setServerErrors(error?.response?.data);
    }

    setLoading(false);
  };

  return (
    <Card className={styles.card}>
      <H1 className={styles.title}>{t('login')}</H1>

      {!!serverErrors?.detail && (
        <div className={styles.errorContainer}>
          <AlertIcon />
          <p>{serverErrors?.detail}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('username')}
          label={t('username')}
          placeholder={t('usernamePlaceholder')}
          className={styles.input}
          error={errors.username?.message}
          hasError={!!serverErrors?.detail}
        />
        <TextField
          {...register('password')}
          forPassword={true}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
          error={errors.password?.message}
          hasError={!!serverErrors?.detail}
        />
        <Button type="submit" className={styles.button} disabled={isLoading}>
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
