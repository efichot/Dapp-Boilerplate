/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import query from 'apollo/query/UsersEssentials.gql'
import { ListQuery } from 'containers'
import { GraphRequest, GraphList } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <GraphList 
  query='usersLatest'
  gql={query}
  variables={{boundaries:{limitToLast: 10}, order: {reverse: true}}}
  foundry="QueryUsersInterface"
  itemStyled={{
    w: [1]
  }}
/>