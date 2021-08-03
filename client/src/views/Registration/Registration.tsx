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
import { registerUser, getUserInfo, RegisterRequest } from 'src/services';
import { setUserStateAction } from 'src/store/user';

import { registrationSchema } from './Registration.constants';
import styles from './Registration.module.scss';

const Registration: FC = () => {
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState<Record<string, string> | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (values: RegisterRequest) => {
    setLoading(true);
    setServerErrors(null);

    try {
      await registerUser(values);
      const { data } = await getUserInfo();
      dispatch(setUserStateAction(data));
    } catch (error) {
      setServerErrors(error?.response?.data);
    }

    setLoading(false);
  };

  return (
    <Card className={styles.card}>
      <H1 className={styles.title}>{t('registration')}</H1>

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
          error={errors.username?.message || serverErrors?.username}
        />

        <div className={styles.inputGroup}>
          <TextField
            {...register('firstname')}
            label={t('firstName')}
            placeholder={t('firstNamePlaceholder')}
            className={styles.inputItem}
            error={errors.firstname?.message || serverErrors?.firstname}
          />
          <TextField
            {...register('lastname')}
            label={t('lastName')}
            placeholder={t('lastNamePlaceholder')}
            className={styles.inputItem}
            error={errors.lastname?.message || serverErrors?.lastname}
          />
        </div>

        <TextField
          {...register('password')}
          forPassword={true}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          className={styles.input}
          error={errors.password?.message || serverErrors?.password}
        />
        <Button type="submit" className={styles.button} disabled={isLoading}>
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
