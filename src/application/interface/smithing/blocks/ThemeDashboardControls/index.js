/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import ThemeLayoutPanelToggle from 'appContainer/theme/ThemeLayoutPanelToggle'
import ThemeLayoutPanelLeftToggle from 'appContainer/theme/ThemeLayoutPanelLeftToggle'
import ThemeLayoutPanelRightToggle from 'appContainer/theme/ThemeLayoutPanelRightToggle'

import ThemeLayoutPanelAsideControls from 'appContainer/theme/ThemeLayoutPanelAsideControls'
import ThemeLayoutPanelHeaderControls from 'appContainer/theme/ThemeLayoutPanelHeaderControls'
/* ------------------------------- Component -------------------------------- */
export default props =>
<div>
  <ThemeLayoutPanelHeaderControls/>
  <ThemeLayoutPanelAsideControls/>
  <ThemeLayoutPanelToggle>
    Toggle Panels
  </ThemeLayoutPanelToggle>
  <ThemeLayoutPanelLeftToggle>
    Toggle Left
  </ThemeLayoutPanelLeftToggle>
  <ThemeLayoutPanelRightToggle>
    Toggle Right
  </ThemeLayoutPanelRightToggle>
</div>