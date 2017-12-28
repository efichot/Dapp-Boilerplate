/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument } from 'containers'
import assets from 'assets'
import { Flex, Box, Container, Heading, Section} from 'atomic'
import {
  ProjectsSearchAdvanced,
} from 'entity'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section gradient='blue' py={[20,60]} >
    <Heading level={[3]} f={[5,6]} color='white' fw='300' ts={'lightHazy'} ta='center'>Find Active Projects</Heading>
    <Heading level={[3]} f={[2]} color='white' fw='300' ta='center' ts={'darkHazy'}>A Library of Curated Ethereum Projects/Ideas</Heading>
    <Container my={[20,40]} >
      <Flex>
        <Box bg='white' br={5} bs={3} p={[10,20]} w={[1,0.2]}>
          <ProjectsSearchAdvanced/>
        </Box>
        <Box w={[1,0.8]} pl={[0,0, 30]} h={300, 500} of='hidden' >
          <PerfectScrollbar>
            <FirestoreList
              collection='projects'
              delta='ProjectSearch'
              foundry='ProjectCard'
              styled={{
                w: [1, 1, 0.33333333],
              }}
            />
          </PerfectScrollbar>
        </Box>
      </Flex>
    </Container>
  </Section>
)
