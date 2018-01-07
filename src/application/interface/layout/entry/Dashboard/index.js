/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import LayoutDashboardRender from './component';

/* ------------------------ Initialize Dependencies ------------------------- */
import { getZonesDashboard } from 'appStore/departments/theme/selectors'

/* -------------------------- Container Methods ----------------------------- */
const mapStateToProps = (state) => {
  const { aside, footer, header, main, zones, regions } = getZonesDashboard(state)

  return {
    regions, zones,
    aside, footer, header, main,
  };
}

export default connect(mapStateToProps)(LayoutDashboardRender);
