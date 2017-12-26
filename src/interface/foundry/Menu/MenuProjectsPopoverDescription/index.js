/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import { FirestoreList } from 'containers'
import {DialogOpen, PopoverClose} from 'containers'
import {
  ProjectsSearchAdvanced,
} from 'entity'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------------- Component -------------------------------- */
export default props => <Box w={[1,1,675]} bs={4} br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Projects</Heading>
      <Paragraph f={[1]}>
        Find the latst Ethereum Projects and Ideas. The community is growing, changing and sharing new solutions everyday. Stay connected.
      </Paragraph>
      {DialogOpen ? <DialogOpen foundry='ProjectAddFull'><PopoverClose delta='MenuProject' ><Button gradient='cherry' w={1} >Add Project</Button></PopoverClose></DialogOpen> : null }
      <Heading level={[3]} f={[3,4]} color='blue' mt={15}>
        Get Involved
      </Heading>
      <Paragraph f={[1]}>
        Contribute to the Ethereum community. Use, write and create videos for community projects.
      </Paragraph>
      <PopoverClose delta='MenuProject'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/projects/map">
          Realtime Map
        </Link>
        </Button></PopoverClose>
      <PopoverClose delta='MenuProject'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/projects">
          Advanced Search
        </Link>
        </Button></PopoverClose>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
            <PerfectScrollbar>
              <ProjectsSearchAdvanced/>
              <PopoverClose delta='MenuProject' >
                <FirestoreList
                  delta='ProjectSearch'
                  foundry='ProjectCard'
                  styled={{
                    w: [1],
                  }}
                  {...props}
                />
              </PopoverClose>
            </PerfectScrollbar>
        </Box>
    </Box>
  </Flex>
</Box>