import assets from 'assets'
const drawerMenuItems = [
  {
    title: 'Activity',
    branch: 'dashboard/person',
    destination: 'activity',
    svg: assets.svg.backpack,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'People',
    branch: 'dashboard/person',
    destination: 'people',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'blue'
    }
  },
  {
    title: 'Edit',
    branch: 'dashboard/person',
    destination: 'edit',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'green'
    }
  },
]

export default drawerMenuItems