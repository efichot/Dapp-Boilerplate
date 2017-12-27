/* ------------------------- Internal Dependencies -------------------------- */
// import MacbookPro from 'assets/devices/mbp.png'
// import AllDevices from 'assets/devices/all-devices-abstract-reverse.png'
// import SinglePage from 'assets/devices/single-page.png'
// import Smartphone from 'assets/devices/smartphone-pixel.png'

import images from './images.js'
import devices from './devices.js'
import graphics from './graphics.js'
import icons from './icons.js'
import shapes from './shapes.js'
import screenshots from './screenshots.js'

const assets = {
  graphics: {
    ...graphics
  },
  devices: {
    ...devices
  },
  icons: {
    ...icons
  },
  images: {
    ...images
  },
  shapes: {
    ...shapes
  },
  svg: {
    ...shapes
  },
  screenshots: {
    ...screenshots
  }
}

export default assets