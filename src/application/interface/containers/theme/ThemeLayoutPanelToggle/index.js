/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './component';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { themeLayoutPanelsToggle } from 'appStore/departments/actions'



const mapDispatchToProps = dispatch => ({
  togglePanels: () => dispatch(themeLayoutPanelsToggle())
})

export default connect(null, mapDispatchToProps)(Render);
