/*There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.*/

function matchingStrings(
  stringList: Array<string>,
  queries: Array<string>
): number[] {
  const countArray: Array<number> = [];
  for (const query of queries) {
    const occurance = stringList.filter((string) => string === query);
    const occuranceLength = occurance.length;
    countArray.push(occuranceLength);
  }

  return countArray;
}

const stringList = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

console.log(matchingStrings(stringList, queries));
