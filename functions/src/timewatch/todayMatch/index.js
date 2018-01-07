function todayMatch(daysList){ 
const todayDayNumerical = new Date().getDay()
const dayList = [
  'daySunday',
  'dayMonday',
  'dayTuesday',
  'dayWednesday',
  'dayThursday',
  'dayFriday',
  'daySaturday',
  'daySunday'
  ]
  return dayList
  .filter((day, index)=>{
    if(index === todayDayNumerical && daysList[day] === true ) return true
  })
}

export default todayMatch