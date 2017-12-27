/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
// import query from 'apollo/query/MinigStatistics.gql'
import {Flex, Box, Heading, Button, Image, Paragraph, Container, Section} from 'atomic'
import { UserProfile } from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
/* ---------------------------- Module Package ------------------------------ */
const MiningInterface = ({
  miningInitializeRequest,
  miningStartRequest,
  miningStopRequest,
  miningHashTotalRequest,
  miningHashAverageRequest,
  miningHashAcceptedRequest,
  hashTotal,
  hashAverage,
  hashAccepted,
  miningStatus,
  userID
}) => {
  return (
    <Flex direction={['column']} wrap='wrap' w={1} >
      <Flex direction={['row']} justify='space-evenly' wrap='wrap' ta='center'  mt={[20,40]} >
        <Button br={[5]} gradient='charcoal' onClick={()=>miningInitializeRequest(userID)} >Load</Button>
        <Button br={[3]} bs={[1]} f={[2]} gradient='cherry' px={[20,30]} ts='dark' onClick={miningStartRequest}>Start</Button>
        <Button br={[5]} gradient='charcoal' onClick={miningStopRequest}>Stop</Button>
      </Flex>
      <Flex direction={['colummn', 'column', 'row']} align='flex-start' justify='space-evenly' wrap='wrap' mt={[20,40]} >
        <Box px={[10]}>
          <Paragraph f={[1]} onClick={miningHashTotalRequest}>Total <strong>Hash</strong> Count</Paragraph>
          <Paragraph f={[2]}>{hashTotal}</Paragraph>
        </Box>
        <Box px={[10]}>
          <Paragraph f={[1]}>Average/Second</Paragraph>
          <Paragraph f={[2]}>{hashAverage}</Paragraph>
        </Box>
      </Flex>
      <Button f={[1]} mt={[10,20]} gradient='cherry' ts='dark' onClick={()=> {miningHashTotalRequest(); miningHashAverageRequest(); miningHashAcceptedRequest(); }}>Update Mining Statistics</Button>
      <Paragraph f={[0]} mt={10} textAlign='center'>Automatically updates every 15 seconds with latest <strong>cryptocurrency mining statistics</strong>.</Paragraph>
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default MiningInterface
