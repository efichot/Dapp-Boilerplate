/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import { Heading, Paragraph, Image, Link, HorizontalRule, SVG} from 'atomic'

/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  flex:['1 1 0'],
  gradient:'blue',
  bs:'2',
  py:[10],
  textAlign: 'center'
}

const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  bs:'2',
  p:[7.5]
}

export default (props) => {
  const { identity, uid } = props.data
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={uid} >
      <Flex {...imageLayout } p={[10]} bs={[0]} >
        <Link to={`/dashboard/users/${uid}`} >
          <Image w={[85]} b='2px solid' br='50%' bc='white' bs={[0]} src={identity && identity.images && identity.images.imageProfile || null}/>
        </Link>
      </Flex>
      <Box {...mainLayout}>
        <Heading f={[3]} level={3} display='inline-block' children={identity && identity.name && identity.name.nameFirst || null} />
        <Heading f={[1]} level={3} color='blue' ml={[5]} display='inline-block' children={identity && identity.name && identity.name.nameLast || null} />
        <Heading f={[2]} level={6} fontWeight={[300]} children={identity && identity.contact && identity.contact.contactEmail || null} />
        <Heading f={[2]} level={4} fontWeight={[300]} children={identity && identity.contact && identity.contact.contactPhone || null} />
        <Heading f={[2]} level={4} fw={[300]} children={identity && identity.contact && identity.contact.contactURL || null} />
        <Paragraph f={[1]} fw={[300]}><strong>Biography:</strong> {identity && identity.biography && identity.biography.biographyOverview || null}</Paragraph>
        <Paragraph f={[1]} fw={[300]}><strong>Occupation:</strong> {identity && identity.biography && identity.biography.biographyOccupation || null}</Paragraph>
        <Paragraph f={[1]} fw={[300]}><strong>Skills: </strong>{identity && identity.biography && identity.biography.biographySkills || null}</Paragraph> 
      </Box>
    </Flex>
}