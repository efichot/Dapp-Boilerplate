/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import { Heading, Paragraph, Image, Link, SVG} from 'atomic'

/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  flex:['1 1 0'],
  gradient:'cherry',
  py:[10],
  textAlign: 'center'
}

const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  p:[7.5]
}

export default (props) => {
const  {identity} = props
return <Flex direction={['row']} align='stretch' justify='center' w={[1]} {...props} >
  <Flex {...imageLayout } p={[10]} br={['0 0 10px 0']} bs={[0]} >
    <Link to={`/dashboard/users/${props && props.uid || null }`} >
      <Image w={[85]} b='2px solid' br='50%' bc='white' bs={[0]} src={identity && identity.images && identity.images.imageProfile || null}/>
    </Link>
  </Flex>
  <Box {...mainLayout}>
    <Heading f={[3]} level={3} display='inline-block' children={identity && identity.name && identity.name.nameFirst || null} />
    <Heading f={[1]} level={3} color='blue' ml={[5]} display='inline-block' children={identity && identity.name && identity.name.nameLast || null} />
    <Heading f={[2]} level={6} fontWeight={[300]} children={identity && identity.contact && identity.contact.contactEmail || null} />
    <Heading f={[2]} level={4} fontWeight={[300]} children={identity && identity.contact && identity.contact.contactPhone || null} />
    <Heading f={[2]} level={4} fw={[300]} children={identity && identity.contactURL || null} />
  </Box>
</Flex>
}