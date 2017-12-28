/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Box} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Heading, SVG } from 'atomic'

import { AsideDrawerMenu, TemplateNotifications } from 'foundry'
/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <div>
      <Flex direction='column' w={[1]} >
        <TemplateNotifications/>
        <AsideDrawerMenu owner="aside" />
      </Flex>
    </div>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front