import { connect } from 'react-redux';
import { themeLayoutPanelRightToggle } from 'appStore/departments/actions'
import Render from './component';
const mapDispatchToProps = dispatch => ({
  togglePanel: () => dispatch(themeLayoutPanelRightToggle())
})
export default connect(null, mapDispatchToProps)(Render);
