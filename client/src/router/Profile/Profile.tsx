import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PATHS } from 'src/constants';

const ProfileRouter: FC = () => {
  return (
    <Switch>
      <Route exact={true} path={PATHS.profile} />

      <Route path={PATHS.editProfile}>
        <Switch>
          <Route exact={true} path={PATHS.editProfileInfo} />
          <Route exact={true} path={PATHS.editProfileAvatar} />
          <Route exact={true} path={PATHS.editProfilePassword} />

          <Redirect to={PATHS.editProfileInfo} />
        </Switch>
      </Route>

      <Redirect to={PATHS.profile} />
    </Switch>
  );
};

export default ProfileRouter;
