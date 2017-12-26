/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { DrawerLink } from 'fusion'
import { PopoverPure } from 'containers'
import { MenuAsideItem as MenuAsideItemRecurse } from 'foundry'
/* ------------------------------- Component -------------------------------- */
const MenuAsideItem = props => 
{
let SubMenuItems= undefined
if (props.childrenItems) SubMenuItems = <Box bg='white' >{_.map(props.childrenItems, MenuAsideItemRecurse)}</Box>
return <Flex {...props} key={props.to} {...props.wrapper} >
  <Box flex={['1 1 0']} px={[10]} textAlign="center" {...props.iconWrap} >
    <DrawerLink to={props.to}>
      {!props.svg ? null : <SVG svg={props.svg} {...props.icon} svgColor='white' w={[30]} h={[30]} /> }
    </DrawerLink>
    </Box>
  <Box flex={['4 1 0']} bg={'blue'} pl={[10]} py={[10,15]} {...props.titleWrap}>
    <DrawerLink to={props.to}>
      <Heading f={[3]} level={[4]} fontWeight="300" >{props.title}</Heading>
    </DrawerLink>
  </Box>
  {!SubMenuItems? null
  : <Box p={[5]} >
    <PopoverPure delta={`${props.title}${props.owner}SubMenu`} body={SubMenuItems} place="right" preferPlace="right"> 
      <Box mx={[5,10]}><Heading level={[3]} f={[4]}>+</Heading></Box>
    </PopoverPure>
    </Box>
  }
</Flex>
}

MenuAsideItem.defaultProps = {
  align: 'center',
  direction: 'row',
  gradient: 'blueAlge',
  mb: [10],
  to: "/",
}

export default MenuAsideItem