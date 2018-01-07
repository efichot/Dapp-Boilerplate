/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { asyncComponent } from 'react-async-component';
/* ------------------------- Internal Dependencies -------------------------- */

import Absolute from 'atoms/Absolute'
/*--- : Zones ---*/
import DashboardHeader from 'layout/zones/dashboard/DashboardHeader'
import DashboardMain from 'layout/zones/dashboard/DashboardMain'
import DashboardAside from 'layout/zones/dashboard/DashboardAside'
import DashboardFooter from 'layout/zones/dashboard/DashboardFooter'

/*--- Panels ---*/
import DashboardMainPanelLeft from 'layout/panels/dashboard/DashboardMainPanelLeft'
import DashboardMainPanelRight from 'layout/panels/dashboard/DashboardMainPanelRight'
import DashboardMainPanelContent from 'layout/panels/dashboard/DashboardMainPanelContent'

/*--- Blocks ---*/
import ThemeDashboardControls from 'smithing/blocks/ThemeDashboardControls'
/*--- Routes ---*/
import RegionSpotlight from 'smithing/regions/RegionSpotlight'

/*--- Routes ---*/

// Header
import DashboardHeaderRoutes  from 'routes/dashboard/DashboardHeaderRoutes'

// Aside
import DashboardAsideRoutes from 'routes/dashboard/DashboardAsideRoutes'
import DashboardAsideSmallRoutes from 'routes/dashboard/DashboardAsideSmallRoutes'

// Main
import DashboardMainRoutes from 'routes/dashboard/DashboardMainRoutes'
import DashboardMainPanelLeftRoutes from 'routes/dashboard/DashboardMainPanelLeftRoutes'
import DashboardMainPanelRightRoutes from 'routes/dashboard/DashboardMainPanelRightRoutes'

const HeaderStates = {
  small: [
    <DashboardHeaderRoutes/>
  ],
  normal: [
    <DashboardHeaderRoutes/>
  ],
  large: [
    <DashboardHeaderRoutes/>
  ]
}

const FooterExample = ()=>
<Absolute left right top bottom bg='blue'>
  yoo
</Absolute>

const FooterStates = {
  small: [
    <FooterExample/>,
  ],
  normal: [
    <FooterExample/>,
  ],
  large: [
    <FooterExample/>,
  ]
}
const AsideStates = {
  small: [
    <DashboardAsideSmallRoutes/>,
  ],
  normal: [
    <RegionSpotlight/>,
    <DashboardAsideRoutes/>,
  ],
  large: [
    <RegionSpotlight/>,
    <DashboardAsideRoutes/>,
    <ThemeDashboardControls/>
  ]
}

/* ---------------------------- Module Package ------------------------------ */
export default  ({
    regions, zones,
    aside, footer, header, main,
    ...props
}) => 
<Absolute left right top bottom of='hidden' >
  {/* Header : Zone */}
  {!zones.header ? null: (
    <DashboardHeader {...header.layout} >
      { HeaderStates[header.status.size] || null }
    </DashboardHeader>
  )}

  {/* Main : Zone */}
  {!zones.main ? null: (
    <DashboardMain {...main.layout}>
      {!zones.panelLeft 
        ? null 
        :<DashboardMainPanelLeft {...main.regions.panelLeft.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelLeftRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelLeft>}
      {!zones.mainContent 
        ? null 
        :<DashboardMainPanelContent {...main.regions.content.layout}>
          <PerfectScrollbar>
            <DashboardMainRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelContent>}
      {!zones.panelRight 
        ? null 
        :<DashboardMainPanelRight {...main.regions.panelRight.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelRightRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelRight>}
    </DashboardMain>
  )}

  {/* Aside : Zone */}
  {!zones.aside ? null :(
    <DashboardAside {...aside.layout}>
      <PerfectScrollbar>
        { AsideStates[aside.status.size] || null }
      </PerfectScrollbar>
    </DashboardAside>
  )}

  {/* Footer : Zone */}
  {!zones.footer ? null :(
    <DashboardFooter {...footer.layout}>
      <PerfectScrollbar >
        { FooterStates[aside.status.size] || null }
      </PerfectScrollbar>
    </DashboardFooter>
  )}
</Absolute>