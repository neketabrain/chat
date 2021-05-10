import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PATHS } from 'src/constants';
import { Chat, Chats } from 'src/views';

const ChatRouter: FC = () => {
  return (
    <Switch>
      <Route exact={true} path={PATHS.chats} component={Chats} />
      <Route exact={true} path={PATHS.chat} component={Chat} />

      <Redirect to={PATHS.chats} />
    </Switch>
  );
};

export default ChatRouter;
