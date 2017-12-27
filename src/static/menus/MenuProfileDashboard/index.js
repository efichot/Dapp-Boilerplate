import assets from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Projects',
    to: '/dashboard/profile/projects',
    svg: assets.svg.campfire,
    icon: {
      svgColor: 'red'
    }
  },
  {
    title: 'Communication',
    to: '/dashboard/profile/communication',
      svg: assets.svg.chatDrawn,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Transportation',
    to: '/dashboard/profile/transportation',
      svg: assets.svg.garage,
    icon: {
      svgColor: 'purple'
    }
  },
  {
    title: 'Opportunity',
    to: '/dashboard/profile/projects',
      svg: assets.svg.financialFolder,
    icon: {
      svgColor: 'green'
    }
  },
  {
    title: 'Tasks',
    to: '/dashboard/profile/projects',
    svg: assets.svg.dna,
    icon: {
      svgColor: 'orange'
    }
  },
  {
    title: 'Settings',
    to: '/dashboard/profile/projects',
    svg: assets.svg.cog,
    icon: {
      svgColor: 'yellow'
    }
  },
]

export default drawerMenuItems