/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Absolute, Drawer, Fixed } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { Heading} from 'atomic'
import { DrawerClose, DrawerLink } from 'containers'
/* ------------------------------- Component -------------------------------- */
const DrawerFactory = (props) => (
<Absolute top={props.drawer} bottom={props.drawer} left={props.drawer} right={props.drawer} z={1000} >
  <Drawer
      bs={[2]}
      br={'0 25px 25px 0'}
      open={props.drawer}
      position='left'
      p={3}
      color='white'
      gradient='blue'
      overflow='hidden'
      z={2000}
    >
    <Absolute top right br={9999} mt={[5]} mr={[5]} gradient='cherry' p={[5]}  ><DrawerClose><Heading f={[2]} level={[6]}><a>x</a></Heading></DrawerClose></Absolute>
    <PerfectScrollbar>
      {props.children}
    </PerfectScrollbar>
	</Drawer>
  {!props.drawer ? null : <Fixed top bottom left right onClick={props.drawerClose} w={1} h={1} z={500} /> }
  </Absolute>
)


/* ---------------------------- Export Package ------------------------------ */
export default DrawerFactory
