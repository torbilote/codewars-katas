// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// isAscOrder(new int[]{1,2,4,7,19}) == true
// isAscOrder(new int[]{1,2,3,4,5}) == true
// isAscOrder(new int[]{1,6,10,18,2,4,20}) == false
// isAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order

function inAscOrder(arr) {
  const unsortedArr = [...arr]
  const sortedArr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] !== unsortedArr[i]) {
      return false
    }
  }
  return true
}

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
)
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
)
console.log(
  inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
)
console.log(
  inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
)