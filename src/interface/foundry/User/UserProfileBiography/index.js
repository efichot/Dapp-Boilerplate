/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import { Heading, Paragraph, Image, Link, SVG} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default (props) => {
const  {identity} = props
return <Flex direction={['row']} w={[1]} {...props} >
  <Box>
    <Heading f={[2]} level={6} fontWeight={[300]}>
      {identity && identity.biography && identity.biography.biographyMission || null}
    </Heading>
    <Heading f={[2]} level={6} fontWeight={[300]}>
      {identity && identity.biography && identity.biography.biographyOccupation || null}
    </Heading>
    <Paragraph>
      {identity && identity.biography && identity.biography.biographyOverview || null}
    </Paragraph>
    <Paragraph>
      {identity && identity.biography && identity.biography.biographySkills || null}
    </Paragraph>
    <Heading f={[2]} level={6} fontWeight={[300]} children={identity && identity.biography && identity.biography.biographyCountry || null} />
  </Box>
</Flex>
}