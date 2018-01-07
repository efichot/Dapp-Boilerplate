import { connect } from 'react-redux';
import { 
  themeLayoutDashboardHeaderToggle,
  themeLayoutDashboardHeaderSmall,
  themeLayoutDashboardHeaderNormal,
  themeLayoutDashboardHeaderLarge,
} from 'appStore/departments/actions'
import Render from './component';
const mapDispatchToProps = dispatch => ({
  headerToggle: () => dispatch(themeLayoutDashboardHeaderToggle()),
  headerSmall: () => dispatch(themeLayoutDashboardHeaderSmall()),
  headerNormal: () => dispatch(themeLayoutDashboardHeaderNormal()),
  headerLarge: () => dispatch(themeLayoutDashboardHeaderLarge()),
})
export default connect(null, mapDispatchToProps)(Render);
