import { connect } from 'react-redux';
import { themeLayoutPanelLeftToggle } from 'appStore/departments/actions'
import Render from './component';
const mapDispatchToProps = dispatch => ({
  togglePanel: () => dispatch(themeLayoutPanelLeftToggle())
})
export default connect(null, mapDispatchToProps)(Render);
