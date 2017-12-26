/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Box } from 'atomic'
import {
  MapAdvancedCompose,
 } from 'foundry'
 import { GraphRequest } from 'containers'
 import query from 'apollo/query/User.gql'
/* ------------------------------- Component -------------------------------- */
export default props => <GraphRequest
  query={props.match.params.uid}
  gql={query}
  variables={{uid:props.match.params.uid,  boundaries:{limitToLast: 10}, order: {reverse: true}}}
  itemStyled={{
    w: [1, 0.50]
  }}
  foundry={'UserProfileDashboard'}
/>