import { svg, icons } from 'assets'

export default [
 {
  title: 'Capital Gains',
  to: '/dashboard/gains',
  svg: svg.mobileMoney,
  childrenItems: [
    {
      title: 'Create Deal',
      to: '/dashboard/deal/create',
      svg: svg.financialFolder,
      gradient: 'crimson',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
        wrapper: {
        display: 'flex',
        align: 'center',
      },
    }
  ]
},
{
  title: 'Catalog Trades',
  to: '/dashboard/events',
  svg: icons.uiCalendar,
},
{
  title: 'Tracked Wins/Losses',
  to: '/dashboard/notifcations',
  svg: icons.uiNotifications,
},
{
  title: 'Settings',
  to: '/dashboard/predictions',
  svg: icons.uiPredictive,
},
]