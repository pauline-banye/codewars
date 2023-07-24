// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
const formatDuration = (seconds) => {
    /**
     * Convert to dates to milliseconds because javascript works in milliseconds
     * declare variables to hold the date values
    */
    let date = new Date(seconds * 1000)  
    let year = date.getFullYear() - 1970;
    let day = Math.floor((seconds * 1000) / (24 * 60 * 60 * 1000)) - (year * 365)
    let hour = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()


    // ALT using map
    // let div = 365 * 24 * 60 * 60
    // let s = seconds
    // let [year, day, hour, mins, secs] = [365, 24, 60, 60, 1].map(e => {
    //     let yr = Math.floor((s) / div)
    //     s -= (yr * (div))
    //     div /= e
    //     return yr
    // })


    /** array to hold the date values */
    let timeFormat = []
    
    
    if (seconds === 0) {
        return 'now'
    } else {
      year === 1 ? timeFormat.push(`${year} year`) : year > 1 ? timeFormat.push(`${year} years`) : ''; 
      day === 1 ? timeFormat.push(`${day} day`) : day > 1 ? timeFormat.push(`${day} days`) : '';
      hour === 1 ? timeFormat.push(`${hour} hour`) : hour > 1 ? timeFormat.push(`${hour} hours`) : '';    
      mins === 1 ? timeFormat.push(`${mins} minute`) : mins > 1 ? timeFormat.push(`${mins} minutes`) : ''
      secs === 1 ? timeFormat.push(`${secs} second`) : secs > 1 ? timeFormat.push(`${secs} seconds`) : ''
    
      return timeFormat.length === 1 
      ? timeFormat.join() 
      : `${timeFormat.slice(0, -1).join(', ')} and ${timeFormat[timeFormat.length-1]}`;
    }
  }
  
  console.log(formatDuration(1))//, "1 second");)
  console.log(formatDuration(62))//, "1 minute and 2 seconds");)
  console.log(formatDuration(120))//, "2 minutes");)
  console.log(formatDuration(3600))//, "1 hour");)
  console.log(formatDuration(3662))//, "1 hour, 1 minute and 2 seconds");)
  console.log(formatDuration(0))//, now
  console.log(formatDuration(5503435))//, 63days, 16 hours, 43 minutes and 55 seconds
  console.log(formatDuration(4300872))//, 49 days, 18 hours, 41 minutes and 12 seconds
  console.log(formatDuration(132030240))  //4 years, 68 days, 3 hours and 4 minutes
  