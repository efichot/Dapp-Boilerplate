import assets from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Profile',
    to: '/dashboard/profile',
    svg: assets.svg.backpack,
    icon: {
      svgColor: 'purple'
    }
  },
  {
    title: 'Projects',
    to: '/community',
    svg: assets.svg.campfire,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Opportunity',
    to: '/memberships',
      svg: assets.svg.financialFolder,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Responsibilities',
    to: '/memberships',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'orange'
    }
  },
  {
    title: 'Settings',
    to: '/tools',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'yellow'
    }
  },
]

export default drawerMenuItems