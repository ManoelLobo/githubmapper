/**
 * GoNative - Desafio 03
 * Manoel Thiago Nogueira
 */

import 'config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Map from 'pages/Map';

import { store, persistor } from 'redux/store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Map />
    </PersistGate>
  </Provider>
);

export default App;
