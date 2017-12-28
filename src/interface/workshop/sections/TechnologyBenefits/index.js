/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Content ---*/
import TechnologyBenefitsPeople from 'static/content/technology/TechnologyBenefitsPeople'
import TechnologyBenefitsOrganizations from 'static/content/technology/TechnologyBenefitsOrganizations'
import TechnologyBenefitsGovernment from 'static/content/technology/TechnologyBenefitsGovernment'

/*--- Atomic ---*/
import { Absolute } from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/*--- Components ---*/
import { GridCentered } from 'foundry'
import { AuthorizationLogin } from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props} bg="white" color={['charcoal']} pos="relative" pt={[20,40,80]} z={[15]}>
  <Container w={[720]} >
      <Heading f={[5,6,7]} level={[2]} color={'blue'} mt={[10, 20]} textAlign="center">People + Technology = 🚀</Heading>
      <Paragraph f={[2]} color={['charcoal']} textAlign="center">Technology is secondary to people. To turn ideas into reality, we need people to get involved. Hero are several easy steps you can take today to start actively contributing to the Ethereum Projects.</Paragraph>
  </Container>
  <GridCentered 
    items={TechnologyBenefitsPeople}
    itemsStyled={{ta: 'center',py:[50,125],}}
    wrapper={{color: 'white', mt: [20,40,80], wrap:'wrap'}}
  />
  <GridCentered 
    items={TechnologyBenefitsOrganizations}
    itemsStyled={{ta: 'center',py:[50,125],}}
    wrapper={{color: 'white', wrap:'wrap'}}
  />
  <GridCentered 
    items={TechnologyBenefitsGovernment}
    itemsStyled={{ta: 'center',py:[50,125],}}
    wrapper={{color: 'white', wrap:'wrap'}}
  />
</Section>
)
