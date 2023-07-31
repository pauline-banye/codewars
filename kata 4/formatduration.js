// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
/** 
 * INSTRUCTIONS
 * Your task in order to complete this Kata is to write a function which formats a duration, 
 * given as a number of seconds, in a human-friendly way.
 * 
 * The function must accept a non-negative integer. 
 * If it is zero, it just returns "now". 
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 * 
 * It is much easier to understand with an example:
 * For seconds = 62, your function should return "1 minute and 2 seconds"
 * For seconds = 3662, your function should return "1 hour, 1 minute and 2 seconds"
 * For the purpose of this Kata, a year is 365 days and a day is 24 hours.
 * 
 * Note that spaces are important.
 * Detailed rules
 * The resulting expression is made of components like 4 seconds, 1 year, etc. 
 * In general, a positive integer and one of the valid units of time, separated by a space. 
 * The unit of time is used in plural if the integer is greater than 1.
 * 
 * The components are separated by a comma and a space (", "). 
 * Except the last component, which is separated by " and ", just like it would be written in English.
 * 
 * A more significant units of time will occur before than a least significant one. 
 * Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
 * 
 * Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
 * A component will not appear at all if its value happens to be zero. 
 * Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
 * A unit of time must be used "as much as possible". 
 * It means that the function should not return 61 seconds, but 1 minute and 1 second instead. 
 * Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const formatDuration = (seconds) => {
    /**
     * Create date object using the new Date constructor
     * Convert to milliseconds by multiplying with 1000 because javascript works in milliseconds
    */
    let date = new Date(seconds * 1000)  
    /**
     * declare variables to hold the various date values
    */
    let year = date.getFullYear() - 1970;
    let hour = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let secs = date.getUTCSeconds()
    /**
     * (24 * 60 * 60) is the total number of seconds in a day
     * 24 hours to 1 day
     * 60 minutes to 1 hour
     * 60 seconds to 1 minute
     * To get the number of days, divide the seconds by the total number of seconds in a day
     */
    let day = Math.floor((seconds) / (24 * 60 * 60)) - (year * 365)

    /** Declare array to hold the date values */
    let timeFormat = []
    
    /** To address the first condition -if it is zero, it returns "now". */
    if (seconds === 0) {
        return 'now'
    } 
    /** If year is 1, format it as year, else format it as years */
    year === 1 ? timeFormat.push(`${year} year`) : year > 1 ? timeFormat.push(`${year} years`) : ''; 
    /** If day is 1, format it as day, else format it as days */
    day === 1 ? timeFormat.push(`${day} day`) : day > 1 ? timeFormat.push(`${day} days`) : '';
    /** If hour is 1, format it as hour, else format it as hours */
    hour === 1 ? timeFormat.push(`${hour} hour`) : hour > 1 ? timeFormat.push(`${hour} hours`) : '';    
    /** If minute is 1, format it as minute, else format it as minutes */
    mins === 1 ? timeFormat.push(`${mins} minute`) : mins > 1 ? timeFormat.push(`${mins} minutes`) : ''
    /** If second is 1, format it as second, else format it as seconds */
    secs === 1 ? timeFormat.push(`${secs} second`) : secs > 1 ? timeFormat.push(`${secs} seconds`) : ''
    
    /** 
     * If the time format array is 1, return the element of the array as a string using join
     * if there are more than 1 element, use slice to remove the last element,
     * Join every other element using the comma ','
     * Then join the last element to the string using 'and'
     */
    return timeFormat.length === 1 
    ? timeFormat.join() 
    : `${timeFormat.slice(0, -1).join(', ')} and ${timeFormat[timeFormat.length-1]}`;
  }

  
  console.log(formatDuration(1))// "1 second"
  console.log(formatDuration(62))// "1 minute and 2 seconds"
  console.log(formatDuration(120))// "2 minutes"
  console.log(formatDuration(3600))// "1 hour"
  console.log(formatDuration(3662))// "1 hour, 1 minute and 2 seconds"
  console.log(formatDuration(0))// now
  console.log(formatDuration(5503435))// 63days, 16 hours, 43 minutes and 55 seconds
  console.log(formatDuration(4300872))// 49 days, 18 hours, 41 minutes and 12 seconds
  console.log(formatDuration(132030240))  // 4 years, 68 days, 3 hours and 4 minutes


  // ####################################################################################################################
  // ALTERNATIVE SOLUTION

  
const format_Duration = (sec) => {
  /** Calculate the total seconds in a year (365 * 24 * 60 * 60) */
  let div = 365 * 24 * 60 * 60

  let s = sec
  /**
   * Declare variables to store the number of years, days, hours, minutes, and seconds
   * Destructure the [year, day, hour, mins, secs] to hold the generated values
   * Iterate over the array representing the years down to the second.
   */
  let [year, day, hour, mins, secs] = [365, 24, 60, 60, 1].map(item => {
    /** 
     * Divide the seconds given by the total amount of seconds in a year to calculate the number of years in the value
     * Use Math.floor to round down and eliminate the decimal after the division
     */
      let yr = Math.floor((s) / div)
      console.log(yr);
      /**
       * Deduct the years from the original seconds given
       * Update the number of seconds left after removing the yr.
       */
      s -= (yr * (div))
      console.log(s);

      /** Adjust div to represent the next smaller time unit i.e. from years to days. */
      div /= item

      /** return the values */
      return yr
  })

  /** Declare array to hold the date values */
  let timeFormat = []
  
  /** To address the first condition -if it is zero, it returns "now". */
    if (sec === 0) {
      return 'now'
  } 
  /** If year is 1, format it as year, else format it as years */
  year === 1 ? timeFormat.push(`${year} year`) : year > 1 ? timeFormat.push(`${year} years`) : ''; 
  /** If day is 1, format it as day, else format it as days */
  day === 1 ? timeFormat.push(`${day} day`) : day > 1 ? timeFormat.push(`${day} days`) : '';
  /** If hour is 1, format it as hour, else format it as hours */
  hour === 1 ? timeFormat.push(`${hour} hour`) : hour > 1 ? timeFormat.push(`${hour} hours`) : '';    
  /** If minute is 1, format it as minute, else format it as minutes */
  mins === 1 ? timeFormat.push(`${mins} minute`) : mins > 1 ? timeFormat.push(`${mins} minutes`) : ''
  /** If second is 1, format it as second, else format it as seconds */
  secs === 1 ? timeFormat.push(`${secs} second`) : secs > 1 ? timeFormat.push(`${secs} seconds`) : ''
  
  /** 
   * If the time format array is 1, return the element of the array as a string using join
   * if there are more than 1 element, use slice to remove the last element,
   * Join every other element using the comma ','
   * Then join the last element to the string using 'and'
   */
  return timeFormat.length === 1 
  ? timeFormat.join() 
  : `${timeFormat.slice(0, -1).join(', ')} and ${timeFormat[timeFormat.length-1]}`;
}

console.log(format_Duration(1))// "1 second"
console.log(format_Duration(62))// "1 minute and 2 seconds"
console.log(format_Duration(120))// "2 minutes"
console.log(format_Duration(3600))// "1 hour"
console.log(format_Duration(3662))// "1 hour, 1 minute and 2 seconds"
console.log(format_Duration(0))// now
console.log(format_Duration(5503435))// 63days, 16 hours, 43 minutes and 55 seconds
console.log(format_Duration(4300872))// 49 days, 18 hours, 41 minutes and 12 seconds
console.log(format_Duration(132030240))  // 4 years, 68 days, 3 hours and 4 minutes
