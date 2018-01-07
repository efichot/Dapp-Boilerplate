import { connect } from 'react-redux';
import { 
  themeLayoutDashboardAsideToggle,
  themeLayoutDashboardAsideSmall,
  themeLayoutDashboardAsideNormal,
  themeLayoutDashboardAsideLarge,
 } from 'appStore/departments/actions'
import Render from './component';
const mapDispatchToProps = dispatch => ({
  asideToggle: () => dispatch(themeLayoutDashboardAsideToggle()),
  asideSmall: () => dispatch(themeLayoutDashboardAsideSmall()),
  asideNormal: () => dispatch(themeLayoutDashboardAsideNormal()),
  asideLarge: () => dispatch(themeLayoutDashboardAsideLarge()),
})
export default connect(null, mapDispatchToProps)(Render);
