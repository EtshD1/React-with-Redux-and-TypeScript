import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducers from './redux/reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);