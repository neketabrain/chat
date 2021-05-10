import { FC } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { PATHS } from 'src/constants';
import { MainLayout } from 'src/layouts';
import { Login, Registration } from 'src/views';

import Chat from './Chat';
import Profile from './Profile';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact={true} path={PATHS.login} component={Login} />
          <Route exact={true} path={PATHS.registration} component={Registration} />
          <Route path={PATHS.chats} component={Chat} />
          <Route path={PATHS.profile} component={Profile} />

          <Redirect to={PATHS.chats} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
