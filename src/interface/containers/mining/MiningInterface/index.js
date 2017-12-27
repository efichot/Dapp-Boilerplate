/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
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
import { 
  fromApollo,
  fromMining,
  fromAuthentication
} from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
  },

  /*--- Component Update ---*/
  componentDidUpdate(props) {
      const propsNext = this.props

      if(props.miningStatus !== propsNext.miningStatus) {
        setInterval(()=>{
          props.miningHashTotalRequest()
          props.miningHashAverageRequest()
        }, 15000)
      }

  }
})

/*---*--- Redux ---*---*/
function mapStateToProps(state, props) {
  return {
    userID: (fromAuthentication.getUserId(state)),
    hashTotal: (fromMining.getHashTotal(state)),
    hashAverage: (fromMining.getHashAverage(state)),
    hashAccepted: (fromMining.getHashAccepted(state)),
    miningStatus: (fromMining.getMiningStatus(state)),
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  miningInitializeRequest: (userID) => dispatch(miningInitializeRequest({payload:{userID} })),
  miningStartRequest: () => dispatch(miningStartRequest()),
  miningStopRequest: () => dispatch(miningStopRequest()),
  miningHashTotalRequest: () => dispatch(miningHashTotalRequest()),
  miningHashAverageRequest: () => dispatch(miningHashAverageRequest()),
  miningHashAcceptedRequest: () => dispatch(miningHashAcceptedRequest()),
  miningRunningRequest: () => dispatch(miningRunningRequest()),
}}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
