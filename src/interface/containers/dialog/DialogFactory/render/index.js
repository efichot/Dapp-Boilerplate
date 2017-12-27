/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react';
import styled from 'styled-components'
import Dialog from 'material-ui/Dialog';
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import {Item} from 'foundry'
/* ------------------------------- Component -------------------------------- */
const DialogFactory = (props) => {
  // Extract Properties | Destructure
  const { dialog, dialogClose, title} = props
  const { open } = dialog
  
  // IF a dialogType exists in the Redux Store Department dialog, HIDE the DialogAssembled wrapper
  if(!open) return null
  /*--- Settings Dialog ---*/
  const DialogSettings = {
    title:title ? title : null ,
    autoScrollBodyContent:true,
    modal:false,
    open:open,
    onRequestClose:props.dialogClose,
  }

  return (
    <Box {...props} z={1000}>
      <Dialog {...DialogSettings} >
        <Item foundry={open}/>
      </Dialog>
    </Box>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default DialogFactory
