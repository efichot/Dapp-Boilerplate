/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultProps = withProps({
  onSubmit,
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'organizations'
        ],
        delta: 'OrganizationSearch',
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

/* -------------------------- Form Configuration ---------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const where = []
  if(data.searchOrganizationName) where.push(['name.nameOrganization', '==', data.searchOrganizationName ])
  if(data.searchOrganizationNameLegal) where.push(['name.nameOrganizationLegal', '==', data.searchOrganizationNameLegal ])
  dispatch(
    firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:
      {
        branch: [
          'organizations'
        ],
        delta: 'OrganizationSearch',
        filters:
        {
          where
        }
      }
    })
  )
})

const config = {
  form: 'SearchOrganizationAdvanced',
  fields: [
    'searchOrganizationName',
    'searchOrganizationAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
}

/* --------------------------- Export Default ------------------------------- */
export default compose(
  reduxForm(config),
  connect(null, mapDispatchToProps),
  defaultProps,
  queryLifecycle,
)(Render);

