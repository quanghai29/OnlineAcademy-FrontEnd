import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import DevTools from '../../containers/DevTools';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, logger), DevTools.instrument())
    // applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  // help to see the changes faster
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
