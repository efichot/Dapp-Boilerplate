/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import ReactMapGL from 'react-map-gl';
import ContainerDimensions from 'react-container-dimensions'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box } from 'atomic'
import Foundry from 'foundry'
import {
  MenuOrganizationProfile
} from 'content/menus'

/* ------------------------ Initialize Dependencies ------------------------- */
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;
/* ---------------------------- Module Package ------------------------------ */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))

const Map = ({
  data, foundry, styled, mapStyle, styledMap, 
  onClick, onViewportChange,
  viewport,_onViewportChange,
  containerHeight, containerWidth,
}) => {
  if(!data) return null
  if(!Array.isArray(data)) data = [data] // It's either a documentList or a document. If document, create 1 item documentList.
  const Styled = data ? _.map(data, _.curry(itemApplyStyle)(styled && styled.item || {})) : null;
  const FoundryItems = Styled ? _.map(Styled, Foundry[foundry]) : null
  return (
    <Box {...styledMap}>
      <ContainerDimensions>
        { ({ width, height }) => {
        return <ReactMapGL
        {...viewport}
        height={height}
        width={width}
        mapStyle={mapStyle}
        onClick={onClick}
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        children={FoundryItems}
      />
        }}
      </ContainerDimensions>
    </Box>
  )
}

export default Map