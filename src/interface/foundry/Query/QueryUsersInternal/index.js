/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { } from 'store/departments/actions'
import selects, { fromRxdb } from 'store/departments/selectors'
function mapStateToProps(state) {
  const documents = fromRxdb.getDocuments(state, 'advancedSearch')
  return {
    documents
  };
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
