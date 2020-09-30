import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

import reducers from './reducers';
import saga from './saga';
import Container from 'Container';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, sagaMiddleware)
);

sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
