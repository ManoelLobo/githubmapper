/**
 * GoNative - Desafio 03
 * Manoel Thiago Nogueira
 */

import 'config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import Map from 'pages/Map';

import store from 'redux/store';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
