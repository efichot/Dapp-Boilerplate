/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { dialogOpen, dialogClose, popoverOpen, popoverClose } from 'store/departments/actions'
import { fromPopover } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */

/*---*--- Recompose ---*---*/
const stateToggle = withState(
  'openNow',
  'togglePopover',
  false
)
const defaultProps = withProps({
  open: true
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps, nextProps) {

  }
})


/*---*--- Redux ---*---*/
function mapStateToProps(state) {
  const isOpen = fromPopover.getPopoverStatus('profile')
  return {
    isOpen
  };
}

const mapDispatchToProps = dispatch => ({
  popoverOpen: (id) => dispatch(popoverOpen({payload:{id}})),
  popoverClose: (id) => dispatch(popoverClose({id})),
  dialogOpen: () => dispatch(dialogOpen()),
  dialogClose: () => dispatch(dialogClose()),
})

export default compose(
  stateToggle,
  defaultProps,
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Render);
