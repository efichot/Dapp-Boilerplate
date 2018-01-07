/* --------------------------- Interface Globals ---------------------------- */
import './theme/stylesheet/app.global.css'
import './theme/stylesheet/plugins.global.css'
import './theme/inject'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import Providers from './components/providers'
import Routes from './store/routes/entry';
/* ---------------------------- Initialization ------------------------------ */
export default ({ store, history }) =>
<Providers store={store} history={history} >
  <Routes />
</Providers>