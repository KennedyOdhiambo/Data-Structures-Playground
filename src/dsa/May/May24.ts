/*Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.*/

function rotate(nums: number[], k: number): void {
  for (let i = 0; i <= k; i++) {
    const first = nums[0]
    nums[0] = nums[nums.length - 1]
    nums[nums.length - 1] = first

    console.log(nums)
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 1)
