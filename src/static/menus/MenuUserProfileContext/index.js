import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Activity',
    destination: 'activity',
    svg: assets.svg.backpack,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Rapid Response',
    destination: 'rapid-response',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Edit',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'green'
    }
  },
]

export default drawerMenuItems