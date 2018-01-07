// @flow
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Absolute from 'atoms/Absolute'
/* ------------------------- Internal Dependencies -------------------------- */
import SiteMainRoutes from 'routes/site/SiteMainRoutes'
import SiteHeaderRoutes from 'routes/site/SiteHeaderRoutes'

// Zones
import SiteHeader from 'layout/zones/site/SiteHeader'
import SiteMain from 'layout/zones/site/SiteMain'
import SiteFooter from 'layout/zones/site/SiteFooter'

import { Footer }  from 'smithing/zones'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Absolute left right top bottom>

  {/* Header Zone */}
  {!props.zones.header ? null: (
    <SiteHeader {...props.header.layout} >
      <SiteHeaderRoutes/>
    </SiteHeader>
  )}


  {/* Main Zone */}
  {!props.zones.main ? null: (
    <SiteMain {...props.main.layout}>
      <SiteMainRoutes/>
    </SiteMain>
  )}

  {/* Footer Zone */}
  {!props.zones.footer ? null :(
    <SiteFooter {...props.footer.layout}>
      <Footer/>
    </SiteFooter>
  )}
</Absolute>)

