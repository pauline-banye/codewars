
  // https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript
  /** Each day a plant is growing by upSpeed meters. Each night that plant's height 
   * decreases by downSpeed meters due to the lack of sun heat. 
   * Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. 
   * We want to know when the height of the plant will reach a certain level.
  */

  const growingPlant = (upSpd, dwnSpd, desHgt) => { 
    // declare minimum number of days for the plant to grow
    let numDays = 1;
    /** Begin the loop
     * On the first day the plant has a height of the upspeed
     * Run loop as long as the desiredheight has not been reached
     * for everyday, increment the plant by the upspeed
     */
    for (let iniHgt = upSpd; iniHgt < desHgt; iniHgt += upSpd){
      // decrease plant by the downloadspeed
      iniHgt -= dwnSpd;
      // and increment the number of days
      numDays++;   
    }
    return numDays;
  }
console.log(growingPlant(100,10,910))// 10
console.log(growingPlant(10,9,4))// 1
console.log(growingPlant(79,78,779)) // 701