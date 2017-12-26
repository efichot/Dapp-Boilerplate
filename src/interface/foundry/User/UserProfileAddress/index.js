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
      {identity && identity.address && identity.address.addressStreet || null}, {identity && identity.address && identity.address.addressCity || null}
    </Heading>
    <Heading f={[2]} level={6} fontWeight={[300]}>
      {identity && identity.address && identity.address.addressState || null}, {identity && identity.address && identity.address.addressZip || null}
    </Heading>
    <Heading f={[2]} level={6} fontWeight={[300]} children={identity && identity.address && identity.address.addressCountry || null} />
  </Box>
</Flex>
}