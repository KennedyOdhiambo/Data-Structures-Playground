function maximumHappinessSum(happiness: number[], k: number): number {
  const values: Array<number> = []

  for (let i = 0; i < k; i++) {
    let maxValue = Math.max(...happiness)
    values.push(maxValue)
    const indexOfMaxValue = happiness.indexOf(maxValue)
    const withMaxValueRemoved = happiness.splice(indexOfMaxValue, 1)
    happiness = withMaxValueRemoved.map((value) => Math.max(value - 1, 0))
  }
  const results = values.reduce((initial, value) => initial + value, 0)

  return results
}

console.log(maximumHappinessSum([10, 47, 47], 3))
