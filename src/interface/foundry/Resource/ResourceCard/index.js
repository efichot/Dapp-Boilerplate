/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  bs:'1',
  p:[7.5]
}

export default (props) => {
  /*--- Extraction ---*/
  const{ id, data } = props
  /*--- Extraction ---*/
  const name = idx(props.data, _ => _.name.nameDisplay)
  const nameAlias = idx(props.data, _ => _.name.nameAlias)
  const phone = idx(props.data, _ => _.contact.contactPhone)
  const email = idx(props.data, _ => _.contact.contactEmail)
  const url = idx(props.data, _ => _.contact.contactURL)
  
  const street = idx(props.data, _ => _.address.addressStreet)
  const city = idx(props.data, _ => _.address.addressCity)
  const zip = idx(props.data, _ => _.address.addressZip)
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        <Link to={`/dashboard/resource/${id || null }`} color='blue' >
          <Heading f={[4,4,5]} level={3} display='inline-block' children={name|| null} />
          <Heading f={[2,3]} level={3} color='blue' ml={[5]} display='inline-block' children={nameAlias} />
        </Link>
        { !email?null:<Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
        { !phone?null:<Heading f={[2]} level={3} fw={[300]}><strong>Phone:</strong>{phone}</Heading>}
        { !url?null:<Heading f={[3]} level={4} fw={[300]}><strong>URL</strong>{url}</Heading>}
        { !street ?null
        :<HorizontalRule bc='blue' o={0.3}/>
        }
        
        { !street ?null
        :<Heading f={[2]} level={3} fw={[300]}>Addresss: {street + ", " + city + " " + zip } </Heading>
        }
        
      </Box>
    </Flex>
}