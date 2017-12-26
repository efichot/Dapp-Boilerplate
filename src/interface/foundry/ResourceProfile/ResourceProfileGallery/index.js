/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import {
 Flex, Box, Route
} from 'atomic'
import {
  FormResourceGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex>
    <Box w={[1,1,0.75]}>
      <Route exact path="/dashboard/:entity/:eid" data={idx(props.data, _ => _.images.imageGallery)} component={ImageList}/> 
    </Box>
    <Box w={[1,1,0.25]}>
      {!props.data ? null : <Route exact path="/dashboard/:entity/:eid" component={FormResourceGalleryAdd}/> }
    </Box>
    </Flex>