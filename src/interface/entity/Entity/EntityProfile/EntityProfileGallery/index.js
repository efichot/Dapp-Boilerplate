/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import {Flex, Box,Route} from 'atomic'
import {
  FormGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex>
    <Box w={[1,1,0.75]}>
      {!idx(props.data, _ => _.images.imageGallery) ? null :
      <Route exact path="/dashboard/:entity/:eid" data={idx(props.data, _ => _.images.imageGallery)} component={ImageList}/> 
      }
    </Box>
    <Box w={[1,1,0.25]}p={[10]}>
      <Route exact path="/dashboard/:entity/:eid" component={FormGalleryAdd} collection='projects' />
    </Box>
  </Flex> 