/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import idx from 'idx'
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  br: ['0 10px 10px 0'],
  gradient:'purple',
  py:[10],
  textAlign: 'center',
  w:[0.03],
}

const mainLayout = {
  bg:'white',
  pl:[10],
  p:[7.5],
  w:[0.97],
}

export default (props) => {
  const mission = idx(props.data, _ => _.biography.biographyMission)
  const objective = idx(props.data, _ => _.biography.biographyObjective)
  const summary = idx(props.data, _ => _.biography.biographySummary)
return <Flex direction={['column']} w={[1]} {...props} >
  <Box {...mainLayout}>
    { !mission?null: <Paragraph f={[1]}>{mission}</Paragraph> }
    { !objective?null: <Paragraph f={[1]}>{objective}</Paragraph> }
    { !summary?null: <Paragraph f={[1]}>{summary}</Paragraph> }
  </Box>
</Flex>
}