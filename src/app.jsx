import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './assets/css/index.scss';

import routes from './config/routerConfig.js';

injectTapEventPlugin();

render(<Router routes={routes} history={hashHistory} />, document.getElementById('react'));

