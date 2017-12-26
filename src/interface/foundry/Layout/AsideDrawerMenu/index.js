import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuMainDashboard } from 'content/menus'
export default props => <div>{MenuMainDashboard.map(item=> <MenuAsideItem {...props} {...item}/> )}</div>