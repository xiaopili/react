import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers } from 'redux';
// import reducers from './redux/reducers';
import * as reducers from './redux/reducers';

import './assets/css/index.scss';

import routes from './config/routerConfig.js';

injectTapEventPlugin();

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

// const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById('react'));

