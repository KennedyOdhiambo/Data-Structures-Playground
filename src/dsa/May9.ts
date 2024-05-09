function maximumHappinessSum(happiness: number[], k: number): number {
  const values: Array<number> = []

  for (let i = 0; i < k; i++) {
    console.log("instance of Happiness:", happiness)
    let maxValue = Math.max(...happiness)
    values.push(maxValue)
    const indexOfMaxValue = happiness.indexOf(maxValue)
    console.log(indexOfMaxValue)
    happiness = happiness.splice(indexOfMaxValue, 1).map((value) => value - 1)

    // happiness = happiness.map((value) =>
    //   value !== maxValue ? Math.max(value - 1, 0) : 0
    // )
  }

  console.log("values:", values)

  const finalResults = values.reduce((initial, value) => initial + value, 0)

  return finalResults
}

console.log(maximumHappinessSum([10, 47, 47], 3))
