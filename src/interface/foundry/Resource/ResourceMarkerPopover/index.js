/* ------------------------- External Dependencies -------------------------- */
import idx from 'idx'
import React from 'react'
import {Marker} from 'react-map-gl';
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import { LinkIconSimple } from 'foundry'
import { PopoverPure } from 'containers'
import {
  MenuResourceProfile
} from 'content/menus'



/* ------------------------------- Component -------------------------------- */
export default props => {
  if (!MenuResourceProfile) return null
  const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{MenuResourceProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>
  const name = idx(props,_=>_.data.name.nameResource)
  const latitude = idx(props,_=>_.data.address.geopoint.latitude)
  const longitude = idx(props,_=>_.data.address.geopoint.longitude)
  if(!latitude || !longitude) return null
  return <Marker latitude={latitude} longitude={longitude} offsetLeft={0} offsetTop={0}>
    <PopoverPure body={ProfileMenuMap} >
      <Box bg='white' p={7.5} br={2} bs={1}>
        <Heading level={[6]} f={[1]}>{name}</Heading>
      </Box>
    </PopoverPure>
  </Marker>
}