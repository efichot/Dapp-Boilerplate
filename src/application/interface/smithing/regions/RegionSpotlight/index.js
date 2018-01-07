/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*-* Atoms *-*/
import {
  Flex, Box, 
  Heading, Image, Paragraph, Container, Span
} from 'atomic'
/*-* Containers *-*/
import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex
  bg="#0f0c5d"
  p={12.5}
>
<Flex
  direction={['column']}
  width={[1, 1, 0.5]}
>
  <UPortCredentialsRequest/>
</Flex>
<Flex
  direction={['column']}
  width={[1, 1, 0.5]}
>
  <Box ta='right'>

  </Box>

</Flex>
  
</Flex>
