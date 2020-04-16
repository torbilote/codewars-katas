/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length))
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'), 3)
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  ),
  3
)
