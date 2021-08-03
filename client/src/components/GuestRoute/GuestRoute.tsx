import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { PATHS } from 'src/constants';
import { getUserAuthorizedState } from 'src/store/user';

const GuestRoute: FC<RouteProps> = (props) => {
  const { children, ...restProps } = props;
  const isAuthorized = useSelector(getUserAuthorizedState);

  if (isAuthorized) {
    return <Redirect to={PATHS.chats} />;
  }

  return <Route {...restProps}>{children}</Route>;
};

export default GuestRoute;
