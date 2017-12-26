/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { GraphRequest } from 'containers'
import query from 'apollo/query/Item.gql'
/* ------------------------------- Component -------------------------------- */
export default props => <GraphRequest
  query={props.match.params.pointer} // Redux Apollo store department branch reference
  gql={query}
  variables={{pointer:props.match.params.pointer,  boundaries:{limitToLast: 10}, order: {reverse: true}}}
  itemStyled={{
    w: [1, 0.50]
  }}
  foundry={'OrganizationProfileInterface'}
/>