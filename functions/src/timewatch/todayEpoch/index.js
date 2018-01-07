// http://bigeasy.github.io/timezone | https://www.npmjs.com/package/timezone
const moment = require('moment-timezone')

const todayEpoch = (zone, format) => {
  format = format ? format : "MM/DD/YYYY H:mm:ss";
  zone = zone ? zone : "America/Los_Angeles";

  let m = new Date()
  let d = new Date()
  const midnight = new Date(m.setHours(0,0,0,0));
  const dayend = new Date(d.setHours(24,0,0,-1));
  const midnightDatetime = (
    + (midnight.getMonth()+1)  + "/"  
    + midnight.getDate() + "/"
    + midnight.getFullYear() + " "  
    + midnight.getHours()+ ":"  
    + midnight.getMinutes() + ":" 
    + midnight.getSeconds()
  )

  const dayendDatetime = (
    + (dayend.getMonth()+1)  + "/"  
    + dayend.getDate() + "/"
    + dayend.getFullYear() + " "  
    + dayend.getHours()+ ":"  
    + dayend.getMinutes() + ":" 
    + dayend.getSeconds()
  )

  const midnightEpoch = moment.tz(midnightDatetime, format, zone).utc().unix();
  const dayendEpoch = moment.tz(dayendDatetime, format, zone).utc().unix();

  return {
    midnightEpoch,
    dayendEpoch
  }

}

export default todayEpoch