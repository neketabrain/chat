import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { GuestRoute, PrivateRoute } from 'src/components';
import { PATHS } from 'src/constants';
import { MainLayout } from 'src/layouts';
import { getToken, getUserInfo } from 'src/services';
import { setUserStateAction } from 'src/store/user';
import { Login, Registration, UserInfo } from 'src/views';

import Chat from './Chat';
import Profile from './Profile';

const Router: FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setLoading(true);
      getUserInfo().then(({ data }) => {
        dispatch(setUserStateAction(data));
        setLoading(false);
      });
    }
  }, [dispatch]);

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <GuestRoute exact={true} path={PATHS.login} component={Login} />
          <GuestRoute exact={true} path={PATHS.registration} component={Registration} />
          <PrivateRoute exact={true} path={PATHS.userInfo} component={() => <UserInfo isOtherUser={true} />} />
          <PrivateRoute path={PATHS.chats} component={Chat} />
          <PrivateRoute path={PATHS.profile} component={Profile} />

          <Redirect to={PATHS.chats} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
