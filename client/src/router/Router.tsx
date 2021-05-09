import { FC } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { PATHS } from 'src/constants';
import { MainLayout } from 'src/layouts';
import { Login, Registration } from 'src/views';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact={true} path={PATHS.login} component={Login} />
          <Route exact={true} path={PATHS.registration} component={Registration} />

          <Redirect to={PATHS.login} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
