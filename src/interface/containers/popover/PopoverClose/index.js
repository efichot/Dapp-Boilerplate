/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { popoverClose } from 'store/departments/actions'

const mapDispatchToProps = (dispatch, props) => ({
  popoverClose: () => dispatch(popoverClose({payload:{delta: props.delta }}))
})

export default connect(null, mapDispatchToProps)(Render);
