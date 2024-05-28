/*Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/

function twoSum(nums: number[], target: number): number[] {
  let firstEl
  let secondEl

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        firstEl = i
        secondEl = j
      }
    }
  }

  return [firstEl as number, secondEl as number]
}

console.log(twoSum([3, 2, 4], 6))
