/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/* ------------------------ Initialize Dependencies ------------------------- */
import { apolloQueryRequest, rxdbCollectionInsertRequest, rxdbCollectionFindRequest, firestormEntityReadRequest } from 'store/departments/actions'
import {
  databaseWriteRequest,
  firestormEntityCreateRequest,
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
  firestoreDocumentDeleteRequest,
  firestoreDocumentFieldsDeleteRequest,
} from 'store/departments/actions'
import { fromApollo, getAccessToken } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {

  const filterType = {
    searchNameFirst: {
      ref: 'name.nameFirst',
      operator: '==',
      type: 'where'
    },
    searchNameLast: {
      ref: 'name.nameLast',
      operator: '==',
      type: 'where'
    },
  }

  const filters = _.map(data, (v,k)=>{
    if(filterType[k].type == 'where') return [
      [filterType[k].ref, filterType[k].operator, v],
      [filterType[k].ref, filterType[k].operator, v.toLowerCase()],
      [filterType[k].ref, filterType[k].operator, v.charAt(0).toUpperCase() + v.split(1)],
    ]
  }).filter(i=> i)

  const filterAll = []; _.forEach(filters, v=> filterAll.push(...v))
  /*--- Metadata/Configuration ---*/
  const payload={}
  const metadata = {
    delta: 'PeopleSearch',
    collection: 'people',
    filters: {
      where: [
          ...filterAll
      ]
    }
  }
  dispatch(firestoreDocumentFilterGetRequest({payload, metadata}))

})

const validate = createValidator({

})

/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  onSubmit,
  status: 'initialize',
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      // this.props.firestormEntityReadRequest({payload:{}, metadata:{database: 'core', collection: 'users', delta:'kamestTest'}})
      this.props.reset()
    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  return {

  };
}


const mapDispatchToProps = (dispatch, props) => ({
  firestormEntityReadRequest: (settings)=>dispatch(firestormEntityReadRequest(settings))
})

/* -------------------------- Form Configuration ---------------------------- */

const config = {
  form: 'PeopleSearchAdvanced',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  defaultState,
  defaultProps,
  queryLifecycle,
)(Render);

