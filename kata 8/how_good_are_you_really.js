// https://www.codewars.com/kata/5601409514fc93442500010b
/**
 * There was a test in your class and you passed it. Congratulations!
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return True if you're better, else False!
 * 
 * Note:
 * Your points are not included in the array of your class's points. 
 * For calculating the average point you may add your point to the given array!
*/


/**
 * Use the reduce function to add all the classpoints array with your point
 * then get the average by dividing the total by the length of the classpoints array 
 * If your point is less than the average, return false else return true
*/
const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((yourPoints, classPoints) => yourPoints + classPoints)/classPoints.length 


console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))// false