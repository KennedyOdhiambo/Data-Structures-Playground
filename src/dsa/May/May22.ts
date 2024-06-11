/* Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array */

function majorityElement(nums: Array<number>) {
  const countObj: { [key: string]: number } = {}

  for (const num of nums) {
    countObj[num] = (countObj[num] || 0) + 1
  }

  let maxCount = 0
  let mostOccurringElement
  for (const [element, count] of Object.entries(countObj)) {
    if (count > maxCount) {
      maxCount = count
      mostOccurringElement = element
    }
  }

  return mostOccurringElement
}

const myArray = [1, 2, 3, 2, 4, 2, 5, 2, 2]

console.log(majorityElement(myArray))
