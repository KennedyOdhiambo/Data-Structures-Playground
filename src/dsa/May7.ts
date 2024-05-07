/*Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.*/

function plusMinus(arr: Array<number>): void {
  const arrLength = arr.length;

  const positiveArr: Array<number> = [];
  const negativeArr: Array<number> = [];

  for (const value of arr) {
    if (value > 0) {
      positiveArr.push(value);
    }
    if (value < 0) {
      negativeArr.push(value);
    }
  }

  const lengthPos = positiveArr.length;
  const lengthNeg = negativeArr.length;
  const lengthZero = arrLength - (lengthPos + lengthNeg);

  console.log((lengthPos / arrLength).toFixed(6));
  console.log((lengthNeg / arrLength).toFixed(6));
  console.log((lengthZero / arrLength).toFixed(6));
}
