/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
/* ------------------------- Internal Dependencies -------------------------- */
import Root from './interface';
import { configureStore, history } from 'appStore/configuration';
import registerServiceWorker from './registerServiceWorker';

/* ------------------------ Initialize Dependencies ------------------------- */
const store = configureStore();

/* ---------------------------- Module Package ------------------------------ */
const rootElement = document.getElementById('root')
ReactDOM.render(<AppContainer><Root store={store} history={history} /></AppContainer>, rootElement);

if (module.hot) { module.hot.accept('./interface', function() {
    const NextRoot = require('./interface'); // eslint-disable-line global-require
    ReactDOM.render(<AppContainer><NextRoot store={store} history={history} /></AppContainer>,rootElement);
})}
/* ---------------------------- Service Worker ------------------------------ */
registerServiceWorker();
