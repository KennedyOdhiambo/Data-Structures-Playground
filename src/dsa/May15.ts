//question: https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

const removeElement = function (nums: Array<number>, val: number) {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      ;[nums[i], nums[k]] = [nums[k], nums[i]]
      k++
    }
  }

  return k
}
