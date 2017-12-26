/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Absolute } from 'particles'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive, Route
} from 'atomic'
import {
  ImageList,
  FormResourceBannerAdd,
  VideoEmbed,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => <Box
      bs={3}
      color='white'
      mh={[200,260]} py={[40,80]} of='hidden' ta='center' >
      <BackgroundGradient gradient='ibize' />
      {!idx(props.data, _ => _.images.imageBanner) ? null : 
      <BackgroundImage src={idx(props.data, _ => _.images.imageBanner)} o={0.5}/>
      }
      <Flex align='center' direction={['column']} justify='center' color='white' w={1} ta='center' >
        <Heading f={[6,7]} level={3} children={idx(props.data, _ => _.name.nameResource)}  ts={'darkPurple'} />
        <Heading f={[3]} level={4} ml={[5]} fw='300' >Alias: {idx(props.data, _ => _.name.nameResourceAlias)}</Heading>
        <Box z={10}>
          {!idx(props.data, _ => _.metadata.metaVideoURL) ? null : <VideoEmbed url={idx(props.data, _ => _.metadata.metaVideoURL)}/>}
        </Box>
      </Flex>
      <Absolute bottom right>
        <Box p={20} w={[1,1, 510]} >
          {!props.data ? null : <Route path="/dashboard/:entity/:eid" component={FormResourceBannerAdd}/> }
        </Box>
      </Absolute>
    </Box>