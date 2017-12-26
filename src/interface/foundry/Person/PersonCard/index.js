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
  const nameFirst = idx(props.data, _ => _.name.nameFirst)
  const nameLast = idx(props.data, _ => _.name.nameLast)
  const phone = idx(props.data, _ => _.contact.contactPhone)
  const email = idx(props.data, _ => _.contact.contactEmail)
  const url = idx(props.data, _ => _.contact.contactURL)
  const imageProfile = idx(props.data, _ => _.images.imageProfile)
  
  const street = idx(props.data, _ => _.address.addressStreet)
  const city = idx(props.data, _ => _.address.addressCity)
  const zip = idx(props.data, _ => _.address.addressZip)
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        <Link to={`/dashboard/person/${id || null }`} color='blue' >
          {!imageProfile ? null : <Image src={imageProfile} b={'2px solid #FFF'} br={99999} w={40} /> }
          <Heading f={[4,4,5]} level={3} display='inline-block' children={nameFirst|| null} />
          <Heading f={[2,3]} level={3} color='blue' ml={[5]} display='inline-block' children={nameLast} />
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