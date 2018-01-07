/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Heading, Image, Link, Paragraph, SVG
} from 'atomic'

import {FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
const Body = props => <Box w={[1,1,675]} boxShadow={2} hover={{boxShadow: 3}}  br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} gradient='white' color='white' p={[10,20]} bs={1} >
      <Heading level={[3]} f={[3,4]}>Primary Action</Heading>
      <Paragraph f={[1]}>
        Vivamus eget augue in quam bibendum volutpat a eget odio. Nulla est nunc, porttitor eget suscipit ac, eleifend id ante.
      </Paragraph>
      {DialogOpen ? <DialogOpen foundry='OrganizationAddFull'><PopoverClose delta='MenuPredict' ><Button gradient='cherry' w={1} >
        Call To Action
      </Button></PopoverClose></DialogOpen> : null }
      <Heading level={[3]} f={[3,4]} mt={15}>
        Secondary Acions
      </Heading>
      <Paragraph f={[1]}>
        Vivamus eget augue in quam bibendum volutpat a eget odio. Nulla est nunc, porttitor eget suscipit ac, eleifend id ante.
      </Paragraph>
      <PopoverClose delta='MenuPredict'><Button gradient='white' mt={10} w={1}>
        <Link to="/dashboard/map">
          Secondary Action
        </Link>
        </Button></PopoverClose>
      <PopoverClose delta='MenuPredict'><Button gradient='white' mt={10} w={1}>
        <Link to="/dashboard">
          Tertiary Action
        </Link>
        </Button></PopoverClose>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
            <PerfectScrollbar>
              
            </PerfectScrollbar>
        </Box>
    </Box>
  </Flex>
</Box>


export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]}>
    <PopoverPure delta='MenuPredict' body={Body} >
      <SVG svg={assets.svg.conversion} svgColor='white'  w={[35]} height={[35]}  /> 
      <Heading level={[3]} f={[2]} color='white' >
        Predict
      </Heading>
    </PopoverPure>
    </Box>
</Flex>