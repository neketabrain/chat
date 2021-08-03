import { FC } from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import { configureStore } from './store';

const App: FC = () => {
  return (
    <Provider store={configureStore()}>
      <Router />
    </Provider>
  );
};

export default App;
