/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import query from 'apollo/query/UsersEssentials.gql'
import { Flex } from 'particles'
import { UserProfile } from 'foundry'
import Foundry from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))
/* ---------------------------- Module Package ------------------------------ */
const ListQuery = props => {
  let ListStyled = {};
  let ListFoundry = {}
  if(props.documents) {
    ListStyled = _.map(props.documents, _.curry(itemApplyStyle)(props.itemStyled))
    ListFoundry = _.map(ListStyled, Foundry[props.foundry])
  }
  
  return (
    <Flex direction={['row']} wrap='wrap'>
      {props.documents ? ListFoundry : null}
    </Flex>
  )
}
ListQuery.defaultProps = {
  foundry: 'QueryUsersInterface',
  itemStyled: {
    w: 1
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default ListQuery
