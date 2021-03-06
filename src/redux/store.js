import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'GithubMarker',
  storage,
  blacklist: ['ui'],
};
const createAdequateStore = __DEV__ ? console.tron.createStore : createStore;
export const store = createAdequateStore(
  persistCombineReducers(persistConfig, reducers),
  compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
