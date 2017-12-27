/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */
import { 
  apolloQueryRequest,
  miningInitializeRequest,
  miningRunningRequest,
  miningStartRequest,
  miningStopRequest,
  miningThreadsCountSetRequest,
  miningThreadsAutoCountSetRequest,
  miningHashTotalRequest,
  miningHashAverageRequest,
  miningHashAcceptedRequest,
} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
import { } from 'store/departments/actions'

function mapStateToProps(state) {
  const {  } = state
  return {
    
  };
}

const mapDispatchToProps = dispatch => ({
  miningStartRequest: () => dispatch(miningStartRequest()),
  miningStopRequest: () => dispatch(miningStopRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
