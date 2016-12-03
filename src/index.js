import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(rootReducer, applyMiddleware(promise, thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
