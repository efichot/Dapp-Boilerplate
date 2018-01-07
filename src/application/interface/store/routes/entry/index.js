/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
/* ------------------------- External Dependencies -------------------------- */
import Box from 'atoms/Box'
import Block from 'atoms/Block'
import SpinnerSquares from 'atoms/SpinnerSquares'

import DialogFactory from 'containers/dialog/DialogFactory'
import DrawerFactory from 'containers/drawer/DrawerFactory'
import AsideDrawerMenu from 'workshop/layout/AsideDrawerMenu'

import SiteEntry from 'layout/entry/Site'
import DashboardEntry from 'layout/entry/Dashboard'

const ToastSetting = {
  position: 'top-right',
  type: 'default',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnHover: true,
}

export default () => (
<div>
  <Block z={[500]} >
    <DialogFactory/>
    <DrawerFactory>
      <AsideDrawerMenu/>
    </DrawerFactory>
    <ToastContainer {...ToastSetting}/>
  </Block>
  <Block z={[300]} o={0.999999} >
    <Switch>
      <Route path="/dashboard" component={DashboardEntry} />
      <Route path="/" component={SiteEntry} />
    </Switch>
  </Block>
</div>
);
